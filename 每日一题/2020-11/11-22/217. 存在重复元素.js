/**
 *  给定一个整数数组，判断是否存在重复元素。

    如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

     

    示例 1:

    输入: [1,2,3,1]
    输出: true
    示例 2:

    输入: [1,2,3,4]
    输出: false
    示例 3:

    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true

 * 
 * 
 */

var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i ++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        } else {
            let count = map.get(nums[i]) + 1;
            map.set(nums[i],count);
            if(count >= 2){
                return true;
            }
        }
    }
    return false;
};

var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};