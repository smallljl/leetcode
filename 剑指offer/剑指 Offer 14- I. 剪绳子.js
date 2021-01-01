/**
    给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
    每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

    示例 1：

    输入: 2
    输出: 1
    解释: 2 = 1 + 1, 1 × 1 = 1
    示例 2:

    输入: 10
    输出: 36
    解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

 */

 /**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n <= 3) return 1 * (n - 1);
    let res = 1;
    // 拆成最多的3  最多2个2  数学证明
    if(n % 3 === 1) {
        res = 4;
        n -= 4;
    } else if(n % 3 == 2){
        res = 2;
        n-=2;
    }
    while(n){
        res *= 3;
        n-=3;
    }
    return res;
};


 /**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
   let dp = new Array(n+1).fill(1);
   for(let i = 3; i <= n; i++){
       for(let j = 1; j < i; j++){  // j 表示被剪掉的部分
           dp[i] = Math.max(dp[i],Math.max((i-j)*j,dp[i-j]*j))
       }
   }
   return dp[n];
   
};

