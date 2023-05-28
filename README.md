oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g greenfield-ts-cmd
$ greenfield-ts-cmd COMMAND
running command...
$ greenfield-ts-cmd (--version)
greenfield-ts-cmd/0.0.0 linux-x64 node-v17.3.1
$ greenfield-ts-cmd --help [COMMAND]
USAGE
  $ greenfield-ts-cmd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`greenfield-ts-cmd hello PERSON`](#greenfield-ts-cmd-hello-person)
* [`greenfield-ts-cmd hello world`](#greenfield-ts-cmd-hello-world)
* [`greenfield-ts-cmd help [COMMANDS]`](#greenfield-ts-cmd-help-commands)
* [`greenfield-ts-cmd plugins`](#greenfield-ts-cmd-plugins)
* [`greenfield-ts-cmd plugins:install PLUGIN...`](#greenfield-ts-cmd-pluginsinstall-plugin)
* [`greenfield-ts-cmd plugins:inspect PLUGIN...`](#greenfield-ts-cmd-pluginsinspect-plugin)
* [`greenfield-ts-cmd plugins:install PLUGIN...`](#greenfield-ts-cmd-pluginsinstall-plugin-1)
* [`greenfield-ts-cmd plugins:link PLUGIN`](#greenfield-ts-cmd-pluginslink-plugin)
* [`greenfield-ts-cmd plugins:uninstall PLUGIN...`](#greenfield-ts-cmd-pluginsuninstall-plugin)
* [`greenfield-ts-cmd plugins:uninstall PLUGIN...`](#greenfield-ts-cmd-pluginsuninstall-plugin-1)
* [`greenfield-ts-cmd plugins:uninstall PLUGIN...`](#greenfield-ts-cmd-pluginsuninstall-plugin-2)
* [`greenfield-ts-cmd plugins update`](#greenfield-ts-cmd-plugins-update)

## `greenfield-ts-cmd hello PERSON`

Say hello

```
USAGE
  $ greenfield-ts-cmd hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Sp3ctralK1d/greenfield-ts-cmd/blob/v0.0.0/dist/commands/hello/index.ts)_

## `greenfield-ts-cmd hello world`

Say hello world

```
USAGE
  $ greenfield-ts-cmd hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ greenfield-ts-cmd hello world
  hello world! (./src/commands/hello/world.ts)
```

## `greenfield-ts-cmd help [COMMANDS]`

Display help for greenfield-ts-cmd.

```
USAGE
  $ greenfield-ts-cmd help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for greenfield-ts-cmd.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `greenfield-ts-cmd plugins`

List installed plugins.

```
USAGE
  $ greenfield-ts-cmd plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ greenfield-ts-cmd plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `greenfield-ts-cmd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ greenfield-ts-cmd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ greenfield-ts-cmd plugins add

EXAMPLES
  $ greenfield-ts-cmd plugins:install myplugin 

  $ greenfield-ts-cmd plugins:install https://github.com/someuser/someplugin

  $ greenfield-ts-cmd plugins:install someuser/someplugin
```

## `greenfield-ts-cmd plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ greenfield-ts-cmd plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ greenfield-ts-cmd plugins:inspect myplugin
```

## `greenfield-ts-cmd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ greenfield-ts-cmd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ greenfield-ts-cmd plugins add

EXAMPLES
  $ greenfield-ts-cmd plugins:install myplugin 

  $ greenfield-ts-cmd plugins:install https://github.com/someuser/someplugin

  $ greenfield-ts-cmd plugins:install someuser/someplugin
```

## `greenfield-ts-cmd plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ greenfield-ts-cmd plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ greenfield-ts-cmd plugins:link myplugin
```

## `greenfield-ts-cmd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greenfield-ts-cmd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greenfield-ts-cmd plugins unlink
  $ greenfield-ts-cmd plugins remove
```

## `greenfield-ts-cmd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greenfield-ts-cmd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greenfield-ts-cmd plugins unlink
  $ greenfield-ts-cmd plugins remove
```

## `greenfield-ts-cmd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greenfield-ts-cmd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greenfield-ts-cmd plugins unlink
  $ greenfield-ts-cmd plugins remove
```

## `greenfield-ts-cmd plugins update`

Update installed plugins.

```
USAGE
  $ greenfield-ts-cmd plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
