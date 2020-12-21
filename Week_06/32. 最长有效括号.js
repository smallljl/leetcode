/*
 *
 *  给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

    示例 1:

    输入: "(()"
    输出: 2
    解释: 最长有效括号子串为 "()"
    示例 2:

    输入: ")()())"
    输出: 4
    解释: 最长有效括号子串为 "()()"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-valid-parentheses
 * 
 * 
 * 
 * 
 */ 
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
   const dp = Array(s.length).fill(0);

   for(let i = 1; i < s.length; i++){
       if(s[i] === ")"){
           if(i - dp[i-1] - 1 >= 0 && s[i - dp[i-1] - 1] === "("){
               dp[i] = dp[i-1] + 2;
               if(i - dp[i-1] - 2 > 0){
                   dp[i] += dp[i - dp[i-1] - 2];
               }
           }
       }
   }
   return Math.max(...dp,0);
};