/***
 * 我们把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

   示例:
   输入: n = 10
   输出: 12
   解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/chou-shu-lcof
 * 
 * 
 * 
 */
var nthUglyNumber = function(n) {
    let a = 0,b = 0,c = 0;
    let dp = [1];
    for(let i = 1; i < n;i++){
        dp[i] = Math.min(Math.min(dp[a]*2,dp[b]*3),dp[c]*5);
        if(dp[i] === dp[a]*2) a++;
        if(dp[i] === dp[b]*3) b++;
        if(dp[i] === dp[c]*5) c++; 
    }
    return dp[n-1];
};
