/**
 *  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

    示例 1:

    输入: "Let's take LeetCode contest"
    输出: "s'teL ekat edoCteeL tsetnoc" 

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 * 
 * 
 * 
 */
var reverseWords = function(s) {
   function reverseString(s) {
      s = s.split("");
      let left = 0,
          right = s.length-1;
      while (left < right){
          let temp = s[left];
          s[left++] = s[right];
          s[right--] = temp;
      }
      return s.join("");
    };
    let strArr = s.replace(/\s+/g," ").split(" ");
    for(let i = 0;i < strArr.length;i++){
        strArr[i] = reverseString(strArr[i])
    }
    return strArr.join(" ");
};