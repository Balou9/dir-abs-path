# dir-abs-path

[![build status](http://img.shields.io/travis/Balou9/dir-abs-path.svg?style=flat)](http://travis-ci.org/Balou9/dir-abs-path) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/dir-abs-path?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/dir-abs-path)

***

Wrapper for get-abs-path to specify directory

***

## Get it!

```
npm install --save dir-abs-path
```

***

## Usage

``` js
var fs = require('fs')
var dirAbsPath = require('./index.js')
var dir = process.cwd() || 'C:/Users/'

dirAbsPath(dir, function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `dirAbsPath(dir, callback)`

***

## License

[MIT](./license.md)
