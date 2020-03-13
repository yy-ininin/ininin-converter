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

/* 1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写  默认 */

/* 首字母大写 */
const str4 = "aaaa"
converter.changeCase(str4, 1)
// Aaaa

/* 首页母小写 */
const str5 = "AAAA"
converter.changeCase(str4, 2)
// aAAA

/* 大小写转换 */
const str6 = "AAAAaaaa"
converter.changeCase(str4, 3)
// aaaaAAAA

/* 全部大写 */
const str7 = "aaaaa"
converter.changeCase(str4, 4)
// AAAAA

/* 全部小写 */
const str8 = "AAAA"
converter.changeCase(str4, 5)
// aaaa