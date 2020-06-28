/**
 *  给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

    示例 1:

    输入: "aba"
    输出: True
    示例 2:

    输入: "abca"
    输出: True
    解释: 你可以删除c字符。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-palindrome-ii
 *  
 * 
 * 
 */

function isPali(str, l, r) { // 辅助函数
   while (l < r) {            // 指针相遇 结束循环
      if (str[l] !== str[r]) { // 一票否决
         return false 
      }
      l++                      // 指针挪动，相互逼近
      r--
   }
   return true                // 没有遇到不同，返回true
}
      
var validPalindrome = function (str) {
   let l = 0, r = str.length - 1 // 头尾指针
   while (l < r) { 
      if (str[l] !== str[r]) { // 转为判断删掉字符后的字串，是否是回文串
         return isPali(str, l + 1, r) || isPali(str, l, r - 1)
      }
      l++
      r--
   }
   return true
}