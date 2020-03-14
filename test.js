const converter = require('./index')

console.log("1、字符串或数字转半角：")
console.log("１２３４５６７８９=>", converter.toDBC("１２３４５６７８９"))
console.log("2、字符串或数字转全角：")
console.log("123456789=>", converter.toSBC('123456789'))
console.log("3、解析键值对字符串为Hash对象：")
const str3 = "v=1.0.0&name=converter"
console.log(str3, "=>", converter.decodeHashString(str3))
console.log("4、编码Hash对象为键值对字符串：")
const str4 = { v: '1.0.0', name: 'converter' }
console.log(str4, "=>", converter.encodeHashString(str4))
const str5 = 'ABCDEfg'
console.log(str5, "=>", converter.toFirstLowerCase(str5))
const str6 = 'abCde'
console.log(str6, "=>", converter.toFirstUpperCase(str6))
const str7 = '啊 a 是   '
console.log(str7, "=>", converter.trimAll(str7))