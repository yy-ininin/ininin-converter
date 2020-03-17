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
console.log("5、首页母小写 其他字母大写：")
const str5 = 'ABCDEfg'
console.log(str5, "=>", converter.toFirstLowerCase(str5))
console.log("6、首字母大写 其他字母小写：")
const str6 = 'abCde'
console.log(str6, "=>", converter.toFirstUpperCase(str6))
console.log("7、去除字符串中所有空格：")
const str7 = '啊 a 是   '
console.log(str7, "=>", converter.trimAll(str7))
console.log("8、货币格式化: ")
console.log("123456789", "=>", converter.currency(123456789))
console.log("9、地址格式化: ")
console.log("上海市^上海市^闵行区^七宝街道", "=>", converter.location("上海市^上海市^闵行区^七宝街道", 4, "^"))
console.log("10、过滤掉值为空字符的参数: ")
const str9 = {name: '你好', value: '', id: 1, code: '', age: '23', nobby: ['吃饭', '打游戏']}
console.log(str9, "=>", converter.filterNullCharacter(str9, true))
console.log("11、人民币大写: ")
console.log(123456789.11, converter.rmbUpperCase(123456789.01, 11))
console.log(-123456789.11, converter.rmbUpperCase(-123456789.11))
