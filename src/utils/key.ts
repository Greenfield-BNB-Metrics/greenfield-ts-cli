import {privateToAddress, toChecksumAddress} from 'ethereumjs-util'
import Wallet from 'ethereumjs-wallet'

interface EncryptedKey {
    address: string;
    crypto: any;
}

export async function encryptKey(privateKey: string, password: string, options: { kdf: string, n: number, p: number }): Promise<EncryptedKey> {
  // Ethereum keys should be 32 bytes long
  const privateKeyBuffer = Buffer.from(privateKey, 'hex')
  if (privateKeyBuffer.length !== 32) {
    throw new Error('Private key should be 32 bytes long')
  }

  const wallet = Wallet.fromPrivateKey(privateKeyBuffer)
  const address = toChecksumAddress(`0x${privateToAddress(wallet.getPrivateKey()).toString('hex')}`)

  const crypto = await wallet.toV3(password, options)
  return {
    address,
    crypto,
  }
}

export async function decryptKey(encryptedKey: EncryptedKey, password: string): Promise<string> {
  const wallet = await Wallet.fromV3(encryptedKey.crypto, password, true)
  return wallet.getPrivateKey().toString('hex')
}
