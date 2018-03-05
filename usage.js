var fs = require('fs')
var dirAbsPath = require('./index.js')
var dir = process.cwd() || 'C:/Users/'

dirAbsPath(dir, function (err, data) {
  if (err) throw err
  console.log(data)
})
