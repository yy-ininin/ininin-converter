# ininin-converter
字符串或数字转半角，字符串或数字转全角，解析键值对字符串为Hash对象，编码Hash对象为键值对字符串

# install
npm i ininin-converter

# github
https://github.com/yy-ininin/ininin-converter

# usage
```javascript
import converter from 'ininin-converter'

/* 字符串或数字转半角 */
converter.toDBC("１２３４５６７８９")
// 123456789

/* 字符串或数字转全角 */
converter.toSBC('123456789')
// １２３４５６７８９

/* 解析键值对字符串为Hash对象 */
const str3 = "v=1.0.0&name=converter"
converter.decodeHashString(str3)
// { v: '1.0.0', name: 'converter' }

/* 编码Hash对象为键值对字符串 */
const str4 = { v: '1.0.0', name: 'converter' }
converter.encodeHashString(str4)
// v=1.0.0&name=converter

/* 首字母大写 其他字母小写 */
const str5 = "aaaa"
converter.toFirstUpperCase(str5)
// Aaaa

/* 首页母小写 其他字母大写 */
const str6 = "AAAA"
converter.toFirstLowerCase(str6)
// aAAA

/* 去除字符串中所有空格 */
let str7 = " A A "
converter.trimAll(str7, 1)
// "AA"

/* 货币格式化 */
converter.currency(123456789)
// CN¥123,456,789.00

/* 地址格式化 */
let str8 = "上海市^上海市^闵行区^七宝街道"
converter.location(str8, 4, "^")
// "上海市闵行区七宝街道"

/* 过滤掉值为空字符的参数 */
let str9 = {name: '你好', value: '', id: 1, code: '', age: '23', nobby: ['吃饭', '打游戏']}
converter.filterNullCharacter(str9, true)
// { name: '你好', id: 1, age: '23', nobby: [ '吃饭', '打游戏' ] }

/* 人民币大写 */
let str10 = 123456789.11
converter.rmbUpperCase(str10, true)
// 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零壹分
let str11 = -123456789.11
converter.rmbUpperCase(str11)
//欠壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角壹分
