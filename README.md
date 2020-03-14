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