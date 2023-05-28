import {expect, test} from '@oclif/test'

describe('create-keystore', () => {
  test
  .stdout()
  .command(['create-keystore'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create-keystore', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
