/**
 *  给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 *  找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。
 *  假定每组输入只存在唯一答案。

 

    示例：

    输入：nums = [-1,2,1,-4], target = 1
    输出：2
    解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

 * 
 * 
 */

var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;  // 和前一个相等跳过
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            val = nums[i] + nums[left] + nums[right];
            if( Math.abs(val - target) < Math.abs(result - target)){
                result = val;
            }
            if( val === target){
                return target;
            } else if (val < target){
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};