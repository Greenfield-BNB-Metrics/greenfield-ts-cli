import {Args, Command, Flags} from '@oclif/core'
import {client} from '../utils/greenfield'

export default class Sp extends Command {
  static description = 'manage Storage Providers'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
  };

  static args = {
    subcommand: Args.string({
      description: 'subcommand to run',
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Sp)

    const subcommands: { [key: string]: () => Promise<void> } = {
      ls: this.getSpList,
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

  private async getSpList(): Promise<void> {
    this.log('list storage providers')
    await client.sp.getStorageProviders()
    .then(res => {
      console.log(res)
    },
    ).catch(error => {
      this.error(error)
    })
  }
}
