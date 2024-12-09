# `eslint-merge`

Merge Flat Config for ESLint `v9`

## Install

```shell
npm i -D eslint-merge
```

## Use

The `merge` function combines two objects and returns the result

```javascript
import merge from 'eslint-merge'
```

The first argument should be a config, and the second argument an object which contains your changes

```javascript
const result = merge(sharedConfig, changes)
```

In `eslint.config.*`

```javascript
export default [
  merge(sharedConfig, {
    files: [
      'src/**/*.{mjs,cjs}'
    ]
  })
]
```
