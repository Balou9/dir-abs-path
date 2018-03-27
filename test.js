var tape = require('tape')
var dirAbsPath = require('./index.js')

tape('Output', function (t) {
  dirAbsPath(process.cwd(), function (err, data) {
    if (err) throw t.end(err)
    t.ok(data, 'is true')
    t.ok(typeof data, 'object', 'is object')
    t.end()
  })
})

tape('Output gives error', function (t) {
  dirAbsPath('7843', function (err, data) {
    t.ok(err, 'is coming')
    t.end()
  })
})
