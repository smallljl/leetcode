/**
 *  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

    示例：

    输入：nums = [1,2,3,4]
    输出：[1,3,2,4] 
    注：[3,1,2,4] 也是正确的答案之一。


 * 
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0;
    let j = nums.length-1;
    // 类似快排双指针
    while(i <= j){
        while(i <= j && nums[i] % 2 === 1) i++;  // 停留到偶数
        while(i <= j && nums[j] % 2 === 0) j--;  // 停留到奇数
        if(i < j ) swap(nums,i,j);
    }
    return nums;
};

function swap(nums,a,b){
   let temp = nums[a];
   nums[a] = nums[b];
   nums[b] = temp;
}