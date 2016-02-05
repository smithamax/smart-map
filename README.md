#smart-map

## Install

```sh
$ npm install smart-map
```

## Usage

```js
const { smartMap } = require('smart-map');

const square = i => i * i;

smartMap(square, 2);
// => 4

smartMap(square, [1, 2, 3, 4]);
// => [1, 4, 9, 16]
```

Or more usefully

```js
const { smartMapify } = require('smart-map');

const square = smartMapify(i => i * i);

square(2);
// => 4

square([1, 2, 3, 4]);
// => [1, 4, 9, 16]
```
