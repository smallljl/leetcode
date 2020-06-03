/*
    给定一个非负整数数组，你最初位于数组的第一个位置。

    数组中的每个元素代表你在该位置可以跳跃的最大长度。

    你的目标是使用最少的跳跃次数到达数组的最后一个位置。

    示例:

    输入: [2,3,1,1,4]
    输出: 2
    解释: 跳到最后一个位置的最小跳跃数是 2。
         从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/jump-game-ii
 */ 
var jump = function(nums) {
    let len = nums.length-1;
    let steps = 0;
    let maxPosition = 0;
    let end = 0;
    for(let i = 0; i < len; i++){
        maxPosition = Math.max(nums[i]+i,maxPosition);
        if(i === end){
            end = maxPosition;  // 切换最大的位置
            steps++;
        }
    }
    return steps;
};