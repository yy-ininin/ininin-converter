# ininin-converter
字符串或数字转半角，字符串或数字转全角，解析键值对字符串为Hash对象，编码Hash对象为键值对字符串

##1、字符串或数字转半角
converter.toDBC("１２３４５６７８９")  
123456789

##2、字符串或数字转全角
converter.toSBC('123456789')  
１２３４５６７８９

##3、解析键值对字符串为Hash对象
const str3 = "v=1.0.0&name=converter"  
converter.decodeHashString(str3)  
{ v: '1.0.0', name: 'converter' }

##4、编码Hash对象为键值对字符串
const str4 = { v: '1.0.0', name: 'converter' }  
converter.encodeHashString(str4)  
v=1.0.0&name=converter
