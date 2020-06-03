/*给定一个无序的整数数组，找到其中最长上升子序列的长度。
示例:
    输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

    可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

    来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence*/

// 记忆化
var lengthOfLIS2 = function(nums) {
    if(!nums.length) return 0;
    let max = 1;
    const cache = {};
    function _lengthOfLIS(nums,n){
        if(cache[n]!== undefined){
            return cache[n];
        }
        if(n === 0 || n === 1){ return n;}
        let maxEndingHere = 1;
        for(let i = 1; i < n;i++){
            // 求i-1的最长子序列
            result = _lengthOfLIS(nums,i);
            // 如果当前这个比最后一个小 +1
            if(nums[i-1] < nums[n-1]){
                maxEndingHere = Math.max(result+1,maxEndingHere);
            }
        }
        max = Math.max(max,maxEndingHere);
        cache[n]=maxEndingHere;
        return maxEndingHere;
    }
    _lengthOfLIS(nums,nums.length);
    return max;
};

var lengthOfLIS = function(nums,n){
    const len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return 1;
    let dp = new Array(len).fill(1);
    let max  = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
        max = Math.max(dp[i],max);
    }
    return max;
};
let arr = [1,8,9,8,7,7,8,65,7,5,4,8,32,1,8,51,231,65,13,13,21,231,8,1,3,132];
console.log(lengthOfLIS2(arr,arr.length));
console.log(lengthOfLIS(arr,arr.length));