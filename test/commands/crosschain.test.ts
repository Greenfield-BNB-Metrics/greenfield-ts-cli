import {expect, test} from '@oclif/test'

describe('crosschain', () => {
  test
  .stdout()
  .command(['crosschain'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['crosschain', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
