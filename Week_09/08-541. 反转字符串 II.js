/*
 * @Author: your name
 * @Date: 2020-06-17 09:22:51
 * @LastEditTime: 2020-06-24 09:15:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Week_09\08-541. 反转字符串 II.js
 */ 
/**
 *  给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

    示例:

    输入: s = "abcdefg", k = 2
    输出: "bacdfeg"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-string-ii
 * 
 * 
 * 
 * 
 */
var reverseStr = function(s, k) {
   s = s.split("");
   for(let i = 0,len = s.length; i < len; i += 2*k ){
      let left = i,
          right = Math.min(left+k-1,len-1);
      while (left < right){
          let temp = s[left];
          s[left++] = s[right];
          s[right--] = temp;
      }
  }
  return s.join("");
};