/**
 *  给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

    示例 1:

    输入: nums = [1,1,1,2,2,3], k = 2
    输出: [1,2]
    示例 2:

    输入: nums = [1], k = 1
    输出: [1]

 * 
 * 
 */

var topKFrequent = function(nums, k) {
    const map = new Map();
    let arr = [...new Set(nums)];
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }else {
            map.set(nums[i],map.get(nums[i]) + 1);
        }
    }
    return arr.sort((a,b)=> map.get(b) - map.get(a)).slice(0,k);
};