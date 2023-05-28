import * as toml from '@iarna/toml'
import * as fs from 'node:fs'
import {Secp256k1} from '@cosmjs/crypto'
import {fromHex} from '@cosmjs/encoding'

const DEFAILT_PASSWORD_FILE = 'password.txt'

interface cmdConfig {
  RpcAddr: string;
  ChainId: string;
  PasswordFile: string;
  Host: string;
}

async function getPassword(flags: any, config: cmdConfig): Promise<string> {
  let filepath: string
  if (flags.passwordFile) {
    filepath = flags.passwordFile
  } else if (config.PasswordFile) {
    filepath = config.PasswordFile
  } else {
    filepath = DEFAILT_PASSWORD_FILE
  }

  try {
    const readContent = fs.readFileSync(filepath, 'utf8')
    return readContent.trim()
  } catch (error) {
    throw new Error(`failed to read password file: ${error}`)
  }
}

async function parseConfigFile(filePath: string): Promise<any> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const config = toml.parse(fileContent)
    return config
  } catch (error) {
    throw new Error(`Failed to parse config file: ${error}`)
  }
}

// loadKey loads a secp256k1 private key from the given file.
async function loadKey(file: string): Promise<[string, Uint8Array, Error | null]> {
  try {
    const hexString = fs.readFileSync(`${file}`, {encoding: 'utf8'})
    if (hexString.length !== 64) {
      throw new Error('Len of Keybytes is not equal to 64 ')
    }

    const priBytes = fromHex(hexString)

    const keypair = await Secp256k1.makeKeypair(priBytes)
    const pubkey = Secp256k1.compressPubkey(keypair.pubkey)

    return [hexString, pubkey, null]
  } catch (error) {
    console.log(error)
    return ['', new Uint8Array(), error as Error]
  }
}

export {
  getPassword,
  parseConfigFile,
  loadKey,
}
