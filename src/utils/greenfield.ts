import {Client} from '@bnb-chain/greenfield-chain-sdk'

export const client = Client.create(
  'gnfd-testnet-fullnode-tendermint-us.bnbchain.org',
  'greenfield_5600-1',
)

export const getSpList = async () => {
  return client.sp.getStorageProviders()
}
