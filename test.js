var tape = require('tape')
var dirAbsPath = require('./index.js')

tape('Output is an array', function (t) {
  dirAbsPath(process.cwd(), function (err, data) {
    if (err) throw t.end(err)
    t.ok(data, 'is true')
    t.end()
  })
})

tape('Output gives error', function (t) {
  dirAbsPath('7843', function (err, data) {
    t.ok(err, 'is coming')
    t.end()
  })
})
