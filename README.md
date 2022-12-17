# jsonhero-js

## Overview

a NodeJS library getting a [JSONHERO](https://jsonhero.io/) URL of your JavaScript object.

## Usage

### Install

```bash
npm install jsonhero-js
```

### Code in NodeJS

```javascript
const resultUrl = await toJsonHero({ foo: 'bar' });
console.log(resultUrl); // https://jsonhero.io/j/6wD1bQG2S7Xf
```
