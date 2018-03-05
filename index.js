var fs = require('fs')
var getAbsPath = require('get-abs-Path')

function dirAbsPath (dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err)
    callback(null, getAbsPath(dir, files))
  })
}

module.exports = dirAbsPath
