/*
 *
 *  给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

    注意:
    数组长度 n 满足以下条件:

    1 ≤ n ≤ 1000
    1 ≤ m ≤ min(50, n)
    示例:

    输入:
    nums = [7,2,5,10,8]
    m = 2

    输出:
    18

    解释:
    一共有四种方法将nums分割为2个子数组。
    其中最好的方式是将其分为[7,2,5] 和 [10,8]，
    因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。

 * 
 * 
 * 
 */ 
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
   let len = nums.length;
   let dp = new Array(len);
   for(let i = 0 ; i < len ; i++){
       dp[i] = new Array(m+1).fill(Infinity);
   }
   // 前缀和
   let sub = new Array(len).fill(0);
   sub[0] = nums[0];
   for(let i = 1; i < len; i++){
       sub[i] = sub[i-1] + nums[i];
   }

   // 将前i个元素划分为1组
   for(let i = 0; i < len; i++){
       dp[i][1] = sub[i];   // 前i个元素划分1块
   }

   for(let i = 2; i <= m; i++){  // 划分块数
       for(let j = i-1; j < len; j++){
           for(let k = 0; k < j; k++){
               // 0 - j 分i块  0-k i-1块 + k-j 1块的值
               dp[j][i] = Math.min(dp[j][i], Math.max(dp[k][i-1],sub[j] - sub[k]));
           }
       }
   }
   return dp[len-1][m];
};