import {Command, Flags, Args} from '@oclif/core'
import {client} from '../utils/greenfield'

export default class AccountCLI extends Command {
  static description = 'manage accounts';

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
    const {args, flags} = await this.parse(AccountCLI)

    const subcommands: { [key: string]: () => Promise<void> } = {
      balance: this.getAccountBalance,
      payment: this.getPaymentAccount,
      create: this.createPaymentAccount,
      transfer: this.transfer,
      multiTransfer: this.multiTransfer,
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

  private async getAccountBalance(): Promise<void> {
    client.account.getAccountBalance({
      address: '0x61836fC5f9f27FBb64752abc09e88AD0f4a9109a', // Replace with actual address
      denom: 'token', // Replace with actual denom
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async getPaymentAccount(): Promise<void> {
    client.account.getPaymentAccount({
      address: '0x61836fC5f9f27FBb64752abc09e88AD0f4a9109a', // Replace with actual address
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async createPaymentAccount(): Promise<void> {
    client.account.createPaymentAccount({
      // Define your MsgCreatePaymentAccount parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async transfer(): Promise<void> {
    client.account.transfer({
      // Define your MsgSend parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async multiTransfer(): Promise<void> {
    client.account.multiTransfer('0x61836fC5f9f27FBb64752abc09e88AD0f4a9109a', {
      // Define your MsgMultiSend parameters here
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }
}
