import {Command, Flags, Args} from '@oclif/core'
import * as fs from 'node:fs'
import {getPassword, parseConfigFile, loadKey} from '../utils'
import {encryptKey} from '../utils/key'

export default class CreateKeystore extends Command {
  static description = `
    send headObject txn to chain and fetch object info on greenfield chain
    Examples:
    $ gnfd-cmd create-keystore --privKeyFile key.txt  key.json `;

  static flags = {
    privKeyFile: Flags.string({char: 'p', description: 'the private key file path which contain the origin private hex string', required: true}),
  };

  static args = {
    keyfile: Args.string({description: 'keyfile with private key', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(CreateKeystore)

    let keyFilePath = args.keyfile
    if (!keyFilePath) {
      keyFilePath = 'key.txt'
    }

    if (fs.existsSync(keyFilePath)) {
      this.error(`key already exists at: ${keyFilePath}`)
    }

    const privKeyFile = flags.privKeyFile
    if (!privKeyFile) {
      this.error('private key file path')
    }

    // Load private key from file.
    const [privateKey, addr] = await loadKey(privKeyFile)

    const key = {
      Address: addr,
      PrivateKey: privateKey,
    }

    const config = await parseConfigFile('config.toml')
    const password = await getPassword(flags, config)

    // Encrypt the private key.
    const options = {kdf: 'scrypt', n: 262_144, p: 1}
    const encryptedKey = await encryptKey(key.PrivateKey, password, options)
    const encryptContent = JSON.stringify(encryptedKey)
    try {
      fs.writeFileSync(keyFilePath, encryptContent, {mode: 0o600})
    } catch (error) {
      this.error(`failed to write keyfile to the path ${keyFilePath}: ${error}`)
    }

    this.log(`generate keystore ${keyFilePath} successfully, key address: ${key.Address}`)
  }
}
