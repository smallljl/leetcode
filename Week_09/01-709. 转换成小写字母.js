/**
 *  实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

    示例 1：

    输入: "Hello"
    输出: "hello"
    示例 2：

    输入: "here"
    输出: "here"
    示例 3：

    输入: "LOVELY"
    输出: "lovely"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/to-lower-case
 * 
 * 
 */
var toLowerCase = function(str) {
   let res = "";
   for(let i = 0; i < str.length;i++){
      let code = str.charCodeAt(i);
      res += (code <= 90 && code >=65) ?
          String.fromCharCode(code+32) : str[i];
   }
   return res;
};