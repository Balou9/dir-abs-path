var fs = require('fs')
var getAbsPath = require('get-abs-path')

function dirAbsPath (dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err)
    var paths = getAbsPath(dir, files)
    var pathObj = paths.reduce(function(acc,cur,index) {
      acc[files[index]] = cur
      return acc
    }, {})
    callback(null, pathObj)
  })
}

module.exports = dirAbsPath
