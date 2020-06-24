/*
 * @Author: your name
 * @Date: 2020-06-17 09:22:51
 * @LastEditTime: 2020-06-24 15:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\Week_09\17-5. 最长回文子串.js
 */ 
/**
 *  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
    示例 2：

    输入: "cbbd"
    输出: "bb"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * 
 * 
 * 
 */
var isPalindrome = function(charArray,left,right) {
   while(left < right){
      if(charArray[left] !== charArray[right]) return false;
      left++;
      right--;
   }
   return true;
};


var longestPalindrome = function(s) {
   let len = s.length;
   if(len < 2) return s;
   let maxLen = 1;
   let begin = 0;
   let charArray = s.split("");
   for(let i = 0; i < len - 1; i++){
      for(let j = i + 1; j < len; j++){
         if(j - i + 1 > maxLen && isPalindrome(charArray,i,j)){
            maxLen = j - i + 1;
            begin = i;
         }
      }
   }
   return s.substr(begin,maxLen);
};