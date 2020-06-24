/**
 *  给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

    示例 1：

    输入："ab-cd"
    输出："dc-ba"
    示例 2：

    输入："a-bC-dEf-ghIj"
    输出："j-Ih-gfE-dCba"
    示例 3：

    输入："Test1ng-Leet=code-Q!"
    输出："Qedo1ct-eeLg=ntse-T!"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-only-letters
 * 
 * 
 * 
 * 
 */
var reverseOnlyLetters = function(S) {
   let s = S.split('');
   const isAlpha = ch => ch.match(/^[a-z]+$/i) !== null;
   let left = 0, right = s.length-1;
   while(left < right) {
      while(left < right && !isAlpha(s[left])) left++;
      while(left < right && !isAlpha(s[right])) right--;
      let temp = s[left];
      s[left++] = s[right];
      s[right--] = temp;
   }
   return s.join('');
};