# ininin-converter
字符串或数字转半角，字符串或数字转全角，解析键值对字符串为Hash对象，编码Hash对象为键值对字符串

## 字符串或数字转半角
```javascript
converter.toDBC("１２３４５６７８９")
// 123456789
```

## 字符串或数字转全角
```javascript
converter.toSBC('123456789')
// １２３４５６７８９
```

## 解析键值对字符串为Hash对象
```javascript
const str3 = "v=1.0.0&name=converter"
converter.decodeHashString(str3)
// { v: '1.0.0', name: 'converter' }
```

## 编码Hash对象为键值对字符串
```javascript
const str4 = { v: '1.0.0', name: 'converter' }
converter.encodeHashString(str4)
// v=1.0.0&name=converter
```
