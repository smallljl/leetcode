/*
 *  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    示例:
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/two-sum 
 *
 * 
 *  
 */
// 暴力
var twoSum2 = function(nums, target) {
    for(let i =0; i < nums.length;i++){
        for(let j = i+1;j < nums.length; j++){
            if(nums[j] === target - nums[i] && i !== j){
                return [i,j];
            }
        }
    }
};
// 枚举
var twoSum = function(nums,target){
    const map = {};
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = i;
    }
    for(let i=0; i<nums.length;i++){
        let complement = target - nums[i];
        if(map[complement] && map[complement] !== i){
            return [map[complement],i];
        }
    }
}

// 一遍hash法
var twoSum = function(nums,target){
    if (nums.length === 2) return [0, 1];
    let map = {};
    let dis = 0; // 差值
    for(let  i = 0; i < nums.length;i++){
        if(map[target - nums[i]] !== undefined){
            return [map[target - nums[i]],i];
        }
        // 存值的下标 map[24] = 1;
        map[nums[i]] = i;
    }
    return;
}

// 参考国际站优化
var twoSum = function(nums,target){
    if (!nums.length) return;
    if (nums.length === 2) return [0, 1];
    let map = {};
    for(let  i = 0; i < nums.length;i++){
        if(target-nums[i] in map){
            return [map[target - nums[i]],i];
        }
        // 存值的下标 map[24] = 1;
        map[nums[i]] = i;
    }
    return;
}

