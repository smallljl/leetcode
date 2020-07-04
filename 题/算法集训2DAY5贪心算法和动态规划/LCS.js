var num = 0;

/**
 * 得到两个字符串的最长公共子序列
 * @param {*} str1
 * @param {*} str2
 * @return {string}
 */
function LCS(str1, str2) {
  var cache = []; // {str1:xxx, str2:xxxx, result:xxxx}
  function _LCS(str1, str2) {
    //特殊情况去掉
    if (str1 === "" || str2 === "") {
      return "";
    }
    //查看缓存
    for (var i = 0; i < cache.length; i++) {
      if (cache[i].str1 === str1 && cache[i].str2 === str2) {
        return cache[i].result; //命中缓存
      }
    }
    num++;
    var result;
    //两个字符串都有值
    if (str1[0] === str2[0]) {
      result = str1[0] + _LCS(str1.substr(1), str2.substr(1));
    } else {
      // 去掉第一个字符串的首字母
      var lcs1 = _LCS(str1.substr(1), str2);
      // 去掉第二个字符串的首字母
      var lcs2 = _LCS(str1, str2.substr(1));
      if (lcs1.length > lcs2.length) {
        result = lcs1;
      } else {
        result = lcs2;
      }
    }
    cache.push({
      str1: str1,
      str2: str2,
      result: result
    });
    return result;
  }
  console.log(cache);
  return _LCS(str1, str2);
}
console.log(
  LCS(
    "邓哥是渡一的吉祥物，也是全人类的好朋友",
    "面对挑战，决不率先使用邓哥，是渡一对世界的承诺"
  )
);
console.log("运行了" + num + "次");
