/**
 *  给定一个整数数组 nums 和一个目标值 target，
 *  请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]


 * 
 * 
 */
// map解
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length;i++){
        let sum = target - nums[i];
        if(map.has(sum)){
            return [map.get(sum),i]
        } else {
            map.set(nums[i],i);
        }
    }
    return [];
};

// 尾递归优化
var twoSum = function(nums, target) {
    const map = new Map();
    function _twoSum(nums,i,target){
        let sum = target - nums[i];
        if(map.has(sum))
            return [map.get(sum),i];
        map.set(nums[i],i);
        if(i < nums.length){
            i++;
            return _twoSum(nums,i,target);
        } else
            throw "error: twoSum is not find";            
    }
    return _twoSum(nums,0,target);
};