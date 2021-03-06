/*
 *
 *  一条包含字母 A-Z 的消息通过以下方式进行了编码：
    'A' -> 1
    'B' -> 2
    ...
    'Z' -> 26
    给定一个只包含数字的非空字符串，请计算解码方法的总数。

    示例 1:

    输入: "12"
    输出: 2
    解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
    示例 2:

    输入: "226"
    输出: 3
    解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

 *
 *
 */ 
  
var numDecodings = function(s) {
   if(s[0] == 0)
      return 0;
   let n = s.length;
   let dp = new Array(n+1).fill(0);
   dp[0] = dp[1] = 1;
   for(let i = 2;i <= n;i++){
      if(s[i-1] !== 0)
         dp[i] += dp[i-1];
      if((s[i-2] === 1) || (s[i-2] === 2 && s[i-1] <= 6))
         dp[i] += dp[i-2];
   }
   return dp[n];
}; 