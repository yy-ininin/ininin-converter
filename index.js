/**
 * 转换处理类
 * @summary 转换处理类
 * @namespace ininin-converter
 * @author woo@ininin.com
 * @version 1.1.0
 * @since 2016/2/22
 * @constructor
 *-------------------------
 * @author shlijian@ininin.com
 * @version 1.1.1
 * @since 2020/3/13
 * @description 添加首字母大写 / 首页母小写 / 大小写转换 / 全部大写 / 全部小写
 */

module.exports = {
    /** 首字母大写 / 首页母小写 / 大小写转换 / 全部大写 / 全部小写
     * @param  {str} 必选，字符串
     * @param  {type} type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
     * @return {String} 转换后的字符串
     */
    changeCase(str, type) {
      type = type || 4;
      switch (type) {
        case 1:
          return str.replace(/\b\w+\b/g, function(word) {
            return (
              word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
            );
          });
        case 2:
          return str.replace(/\b\w+\b/g, function(word) {
            return (
              word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
            );
          });
        case 3:
          return str
            .split("")
            .map(function(word) {
              if (/[a-z]/.test(word)) {
                return word.toUpperCase();
              } else {
                return word.toLowerCase();
              }
            })
            .join("");
        case 4:
          return str.toUpperCase();
        case 5:
          return str.toLowerCase();
        default:
          return str;
      }
    },
    /**
     * 字符串或数字转半角
     * @method decodeHashString
     * @param {String} str 必选，字符串
     * @returns {String} 转换后的字符串
     */
    toDBC(str) {
      str = String(str == null ? "" : str);
      let result = "";
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 12288) {
          result += String.fromCharCode(str.charCodeAt(i) - 12256);
        } else if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
          result += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else {
          result += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return result;
    },
    /**
     * 字符串或数字转全角
     * @method decodeHashString
     * @param {String} str 必选，字符串
     * @returns {String} 转换后的字符串
     */
    toSBC(str) {
      str = String(str == null ? "" : str);
      let result = "";
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 32) {
          result += String.fromCharCode(12288);
        } else if (str.charCodeAt(i) < 127) {
          result += String.fromCharCode(str.charCodeAt(i) + 65248);
        } else {
          result += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return result;
    },
    /**
     * 解析键值对字符串为Hash对象
     * @method decodeHashString
     * @param {String} str 必选，键值对字符串
     * @param {String} [sign=&] 可选，默认“&”，键值对分隔符
     * @param {String} [flag==] 可选，默认“=”，键值分隔符
     * @returns {Object} Hash对象
     */
    decodeHashString(str, sign, flag) {
      let arr = str ? str.split(sign == null ? "&" : sign) : [];
      let hashs = {};
      let reg = new RegExp(
        "(^|" +
          (sign || "&") +
          ")([^" +
          (flag || "=") +
          "]*)" +
          (flag || "=") +
          "([^" +
          (sign || "&") +
          "]*)(" +
          (sign || "&") +
          "|$)",
        "i"
      );
      for (let i = 0, l = arr.length; i < l; i++) {
        let parts = arr[i].match(reg) || [];
        if (parts[2] != null && parts[2] !== "") {
          hashs[parts[2]] = decodeURIComponent(parts[3] == null ? "" : parts[3]);
        }
      }
      return hashs;
    },
    /**
     * 编码Hash对象为键值对字符串
     * @memberof
     * @method encodeHashString
     * @param {Object} hashs 必选，Hash对象
     * @param {String} [sign=&] 可选，默认“&”，键值对分隔符
     * @param {String} [flag==] 可选，默认“=”，键值分隔符
     * @returns {String} 键值对字符串
     */
    encodeHashString(hashs, sign, flag) {
      let arr = [];
      for (let key in hashs) {
        if (hashs.hasOwnProperty && hashs.hasOwnProperty(key)) {
          arr.push(
            key +
              (flag == null ? "=" : flag) +
              encodeURIComponent(
                decodeURIComponent(hashs[key] == null ? "" : hashs[key])
              )
          );
        }
      }
      return arr.join(sign == null ? "&" : sign);
    }
  };
  