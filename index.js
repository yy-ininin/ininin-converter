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
 * @since 2020/3/14
 * @description 添加首字母大写 / 首页母小写 / 去除字符串中所有空格 / 地址格式化 / 货币格式化 / 过滤掉值为空字符的参数 / 人民币大写
 */

module.exports = {
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
    let reg = new RegExp("(^|" + (sign || "&") + ")([^" + (flag || "=") + "]*)" + (flag || "=") + "([^" + (sign || "&") + "]*)(" + (sign || "&") + "|$)", "i");
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
          key + (flag == null ? "=" : flag) + encodeURIComponent(decodeURIComponent(hashs[key] == null ? "" : hashs[key]))
        );
      }
    }
    return arr.join(sign == null ? "&" : sign);
  },
  /**
   * 去除字符串中所有空格
   * @method trimAll
   * @param  {str}  str 字符串 必填
   * @return {String} 字符串
   */
  trimAll(str) {
    return str.replace(/\s+/g, "");
  },
  /**
   * 首页母小写
   * @method toFirstLowerCase
   * @param {String} str 必选，字符串
   * @returns {String} 转换后的字符串
   */
  toFirstLowerCase(str) {
    return str.replace(/\b\w+\b/g, function (word) {
      return (
        word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      );
    });
  },
  /**
   * 首字母大写
   * @method toFirstUpperCase
   * @param {String} str 必选，字符串
   * @returns {String} 转换后的字符串
   */
  toFirstUpperCase(str) {
    return str.replace(/\b\w+\b/g, function (word) {
      return (
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      );
    });
  },
  /**
   * 人民币大写
   * @method rmbUpperCase
   * @param {String, Number} n 必选 阿拉伯数字金额
   * @param {Boolean} hasZero 小数位是否需要零，  100.01  -> 壹佰元零壹分
   * @returns {String} 大写金额
   */
  rmbUpperCase(n, hasZero = false) {
    let fraction = ["角", "分"]; // 小数
    let digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]; //数字
    let unit = [
      ["元", "万", "亿"],
      ["", "拾", "佰", "仟"]
    ]; // 单位
    let head = n < 0 ? "欠" : ""; // 如果是负数 为欠
    n = Math.abs(n); // 取绝对值
    let s = "";
    for (let i = 0; i < fraction.length; i++) {
      if (hasZero) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]);
      } else {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, ""); // Math.floor(n * 10 * Math.pow(10, i)) % 10 获取小数位数字
      }
    }
    s = s || "整";
    n = Math.floor(n); // 取整数
    for (let i = 0; i < unit[0].length && n > 0; i++) {
      let p = "";
      for (let j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      debugger
      s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
    }
    return (
      head + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
    );
  },
  /**
   * 货币格式化
   * @method currency
   * @param {Number} 必选 value 数值
   * @returns {String} 结果
   */
  currency(value) {
    return Number.prototype.toLocaleString.call(Number(value || 0), undefined, {
      style: "currency",
      currency: "CNY"
    });
  },
  /**
   * 地址格式化
   * @method location
   * @param {String} 必选 value 地址
   * @param {Number} level 显示级别 默认切割后的长度
   * @param {String} separator 分隔符 默认 ^
   * @returns {String} 解析后地址
   */
  location(value, level, separator) {
    if (value == null) {
      return "";
    }
    value = String(value);
    separator = separator != null ? separator : "^";
    let addressRegion = value.split(separator);
    level = level != null ? level : addressRegion.length;
    let start = 0;
    if (addressRegion[0] === addressRegion[1]) {
      start = 1;
    }
    return addressRegion.slice(start, level).join("");
  },
  /**
   * 过滤掉值为空字符的参数
   * @method filterNullCharacter
   * @param {Object} params 必选 参数
   * @param {Boolean} excludeEmpty 是否排除空参数
   * @returns {Object} 过滤后参数对象
   */
  filterNullCharacter(params, excludeEmpty) {
    let obj = {};
    if (typeof params === "object") {
      Object.keys(params).forEach(key => {
        params[key] =
          typeof params[key] === "string" ? params[key].trim() : params[key];
        if (excludeEmpty) {
          if (params[key] !== "" && params[key] != null) {
            obj[key] = params[key];
          }
        } else {
          obj[key] = params[key];
        }
      });
    }
    return obj;
  }
};
