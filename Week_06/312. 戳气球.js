/*
    有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

    现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

    求所能获得硬币的最大数量。

    说明:

    你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
    0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
    示例:

    输入: [3,1,5,8]
    输出: 167 
    解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
         coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/burst-balloons
 */ 


/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 *  dp[0][n-1]
 *  dp[i][j] : 气球序号 i - j 按照一定顺序戳破, 得到max coins
 *  k : i - j 中任意一个气球，并让它是最后被戳破的 
 *  k = i ~ j
 *  dp[i][j] = max(dp[i][k-1] + dp[i][k+1] + nums[left]*nums[k]*nums[right])
 * 
 */
var maxCoins = function(nums) {
    if(nums.length === 0) return 0;
    let n = nums.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(n).fill(0)
    }
    for(let j = 0; j < n; j++){
        for(let i = j; i >= 0; i--){
            for(let k = i; k <= j; k++){
                let left = i === 0 ? 1 : nums[i-1];
                let right = j === n-1 ? 1 : nums[j+1];
                let left_sum = k === i ? 0 : dp[i][k-1];
                let right_sum = k === j ? 0 : dp[k+1][j];
                dp[i][j] = Math.max(dp[i][j],left*nums[k]*right+left_sum+right_sum);
            }
        }
    }
    return dp[0][n-1]
};