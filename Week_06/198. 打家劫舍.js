/**
 * 
 *  你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 *  影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 *  如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

    给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

    示例 1:

    输入: [1,2,3,1]
    输出: 4
    解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
         偷窃到的最高金额 = 1 + 3 = 4 。
    示例 2:

    输入: [2,7,9,3,1]
    输出: 12
    解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
         偷窃到的最高金额 = 2 + 9 + 1 = 12 。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/house-robber
 * 
 * 
 * 
 * 
 */
var rob = function(nums) {
   /*
   状态表示：dp[i]表示从0到i偷到的最大总数
   状态转移: dp[i] = Math.max(dp[i-2] + nums[i],dp[i-1]);
   边界情况: dp[0] nums[0] dp[1] = Math.max(nums[0].nums[1]);
   */
   if(nums === null || nums.length === 0)
       return 0  
   let length = nums.length;
   if(length === 1)
       return nums[0];
   if(length === 2)
       return Math.max(nums[0],nums[1]);
   let dp = [];
   dp[0] = nums[0];
   dp[1] = Math.max(nums[0],nums[1]);
   for(let i = 2;i < length;i++){
       dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
       console.log(dp[i]);
   }
   return dp[length-1];
};

var rob1 = function(nums) {
  /*
  状态表示：dp[i]表示从0到i偷到的最大总数
  状态转移: dp[i] = Math.max(dp[i-2] + nums[i],dp[i-1]);
  边界情况: dp[0] nums[0] dp[1] = Math.max(nums[0].nums[1]);
  */
  if(nums === null || nums.length === 0)
      return 0  
  let length = nums.length;
  if(length === 1)
      return nums[0];
  if(length === 2)
      return Math.max(nums[0],nums[1]);
  let prev = nums[0],curr = Math.max(nums[0],nums[1]);
  for(let i = 2;i < length;i++){
     let next = Math.max(prev+nums[i],curr);
     prev = curr;
     curr = next;
  }
  return curr;
};

var rob2=function(nums){
   /*
   状态表示：dp[i][0]表示偷i的情况下从0到i偷到的最大总数,dp[i][1]表示不投i的情况下从0到i的最大总数
   状态转移: dp[i][0] = dp[i-1][1] + nums[i]     dp[i][1] = Math.max(dp[i-1][0],dp[i-1][1]);
   边界情况: dp[0][0] = nums[0]  dp[0][i] = 0
  */
   if(nums === null || nums.length === 0){
      return 0;
   }
   let length = nums.length;
   if(length === 1){
      return nums[0];
   }
   if(length === 2){
      return Math.max(nums[0],nums[1]);
   }
   let dp = new Array(nums.length);
   for(let i = 0; i < dp.length;i++){
      dp[i] = new Array(2);
   }
   dp[0][0] = nums[0];
   dp[0][1] = 0;
   for(let i = 1; i < length;i++){
      dp[i][0] = dp[i-1][1]+nums[i];
      dp[i][1] = Math.max(dp[i-1][0],dp[i-1][1]);
   }
   return Math.max(dp[length-1][0],dp[length-1][1]);
}

// 优化0(1)的空间复杂度 