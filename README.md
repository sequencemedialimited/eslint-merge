# `eslint-merge`

[ESLint](https://github.com/eslint/eslint) `v9` introduced a change to their [configuration files](https://eslint.org/docs/latest/use/configure/configuration-files) commonly known as _flat config_

Previously, configuration had been hierarchical, enabling developers to change their configuration per _directory_. A Project might have a _root_ and additional files in directories below the root to modify linting behaviour

`eslint-merge` enables developers to apply changes to _shared_ configs with minimal effort
