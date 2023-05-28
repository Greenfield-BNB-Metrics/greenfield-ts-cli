import {Command, Flags, Args} from '@oclif/core'
import {client} from '../utils/greenfield'

export default class Bucket extends Command {
  static description = 'manage buckets';

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
    const {args, flags} = await this.parse(Bucket)

    const subcommands: { [key: string]: () => Promise<void> } = {
      ls: this.listBuckets,
      create: this.createBucket,
      update: this.updateBucket,
      'put-bucket-policy': this.putBucketPolicy,
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

  private async listBuckets(): Promise<void> {
    this.log('list buckets')
    await client.bucket
    .getUserBuckets({
      address: '0x61836fC5f9f27FBb64752abc09e88AD0f4a9109a',
      endpoint: 'https://gnfd-testnet-sp-3.bnbchain.org',
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      this.error(error)
    })
  }

  private async createBucket(): Promise<void> {
    client.bucket.createBucket({
      bucketName: 'test-bucket',
      creator: '0x61836fC5f9f27FBb64752abc09e88AD0f4a9109a', // creator address
      visibility: 'VISIBILITY_TYPE_UNSPECIFIED',
      chargedReadQuota: '0', // Example value, adjust accordingly
      spInfo: {}, // Define your spInfo here
      duration: 0, // duration value here
    })
    .then(res => {
      console.log(res)
    },
    )
    .catch(error => {
      this.error(error)
    },
    )
  }

  private async updateBucket(): Promise<void> {
    client.bucket.updateBucketInfo({
      bucketName: 'test-bucket', // Example bucket name, adjust accordingly
      // Define your parameters here
    })
    .then(res => {
      console.log(res)
    },
    )
    .catch(error => {
      this.error(error)
    },
    )
  }

  private async putBucketPolicy(): Promise<void> {
    client.bucket.putBucketPolicy({
      bucketName: 'test-bucket', // Example bucket name, adjust accordingly
      // Define your parameters here
    })
    .then(res => {
      console.log(res)
    },
    )
    .catch(error => {
      this.error(error)
    },
    )
  }
}
