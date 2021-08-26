# Simple Jest Setup

Node does not support import statements

https://masteringjs.io/tutorials/node/import

nvm use 14.16
As of now, NodeJS doesn’t support any es6 features. and import is es6 feature.

## Steps

```js
mkdir alpha
cd alpha
npm init
npm install jest --save-dev
update test directive in package.json
mkdir src
touch src/lib.js
touch src/lib.test.js
add function to lib
add jest test lib function
npm test
touch ./index.js
require lib
call and console log function
```

```js
package.json
  "scripts": {
    "test": "jest"
  },
```

```js
// lib.js
function SimpleSum(a, b) {
  return a + b;
}

module.exports = { SimpleSum };
```

```js
// lib.test.js
var Lib = require("./lib");

test("adds 1 + 2 to equal 3", () => {
  expect(Lib.SimpleSum(1, 2)).toBe(3);
});
```

```js
// index.js
var Lib = require("./src/lib");
var z = Lib.easySum(1, 2);
console.log(z);
```
