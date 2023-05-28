import {Command, Flags, Args} from '@oclif/core'
import {client} from '../utils/greenfield'

export default class CrossChainCLI extends Command {
  static description = 'manage cross-chain operations';

  static flags = {
    help: Flags.help({char: 'h'}),
  };

  static args = {
    subcommand: Args.string({
      description: 'subcommand to run',
      required: true,
    }),
  };

  async run(): Promise<void> {
    const {args, flags} = await this.parse(CrossChainCLI)

    const subcommands: { [key: string]: () => Promise<void> } = {
      transfer: this.transferOut,
      claim: this.claim,
      sendSequence: this.getChannelSendSequence,
      receiveSequence: this.getChannelReceiveSequence,
      relayer: this.getInturnRelayer,
      package: this.getCrosschainPackage,
      mirrorGroup: this.mirrorGroup,
      mirrorBucket: this.mirrorBucket,
      mirrorObject: this.mirrorObject,
      params: this.getParams,
    }

    const subcommand = subcommands[args.subcommand]

    if (subcommand) {
      await subcommand.call(this).catch(error => {
        this.error(error)
      })

      this.exit(0)
    } else {
      this.log(`Unknown subcommand: ${args.subcommand}`)
    }
  }

  private async transferOut(): Promise<void> {
    client.crossChain.transferOut({
      // Define your MsgTransferOut parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async claim(): Promise<void> {
    client.crossChain.claims({
      // Define your MsgClaim parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getChannelSendSequence(): Promise<void> {
    client.crossChain.getChannelSendSequence(1) // Replace 1 with the actual channel ID
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getChannelReceiveSequence(): Promise<void> {
    client.crossChain.getChannelReceiveSequence(1) // Replace 1 with the actual channel ID
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getInturnRelayer(): Promise<void> {
    client.crossChain.getInturnRelayer()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getCrosschainPackage(): Promise<void> {
    client.crossChain.getCrosschainPackage(1, 1) // Replace these parameters with actual channelId and sequence
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async mirrorGroup(): Promise<void> {
    client.crossChain.mirrorGroup({
      // Define your MsgMirrorGroup parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async mirrorBucket(): Promise<void> {
    client.crossChain.mirrorBucket({
      // Define your MsgMirrorBucket parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async mirrorObject(): Promise<void> {
    client.crossChain.mirrorObject({
      // Define your MsgMirrorObject parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getParams(): Promise<void> {
    client.crossChain.getParams()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }
}
