# unprofessional-argsplitter
a VERY unprofessional argsplitter you should better not touch!

---
## Get started

### Install:
```
npm install unprofessional-argsplitter
```

### Usage
```js
const argsplit = require("unprofessional-argsplitter")

console.log(argsplit('foo=babe "test a"=3 "berta"=hugo "alice loves"="bob very much"'))
```
#### Result:
```js
{
foo: 'babe',
'test a': '3',
berta: hugo,
'alice loves': 'bob very much'

}
```
