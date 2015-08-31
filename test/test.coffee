should = require 'should'
findAPIs = require '../'
fs = require 'fs'
path = require 'path'

Error.stackTraceLimit = Infinity

testLangs =
  js: [
    {
      doc: 'This is a documented function.'
      api: 'var bar = function (a, b, c);'
    }
    {
      doc: 'This is a documented function with\nmultiple lines.'
      api: 'var qix = function qix(foo, herp, derp);'
    }
  ]
  c: [
    {
      doc: 'Documented function.'
      api: 'struct some_struct_t_ ****my_test_func(int a, uint32_t b);'
    }
    {
      doc: 'Documented function.\nwith multiple lines'
      api: 'struct some_struct_t_ ****my_test_func (int a, uint32_t b);'
    }
    {
      doc: 'Documented function.\nwith multiple lines\nand stars!\n\nAnd a ' +
        'new paragraph!'
      api: 'struct some_struct_t_ ****my_test_func(int a, uint32_t b);'
    }
    {
      doc: 'Documented bare function.\n\nAnd a new paragraph!'
      api: 'struct some_struct_t_ ****my_test_func(int a, uint32_t b);'
    }
  ]

setupLangTest = (lang, cases)->
  it "should find the APIs for .#{lang} files", ->
    source = fs.readFileSync path.join __dirname, 'lang', "test.#{lang}"
    source = source.toString()
    apis = findAPIs source, lang
    apis.should.deepEqual cases

setupLangTest lang, cases for lang, cases of testLangs
