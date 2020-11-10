/**
 * 
 *  实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

    如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

    必须原地修改，只允许使用额外常数空间。

    以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
    1,2,3 → 1,3,2
    3,2,1 → 1,2,3
    1,1,5 → 1,5,1

 * 
 */

var nextPermutation = function(nums) {
    let n = nums.length;
    let i = n - 2;
    while(i >= 0 && nums[i] >= nums[i+1]) i--;  // 前面大于后面   走到1
    if(i >= 0){
        let j = n - 1;
        while(j >= 0 && nums[j] <= nums[i]) // 后面大于前面的值  交换
            j--;
        [nums[i],nums[j]] = [nums[j],nums[i]];  // 1+1 n-1 反转
    }
    let l = i + 1;  // i = -1 递减直接反转
    let r = n - 1;
    while(l < r){
        [nums[l],nums[r]] = [nums[r],nums[l]];
        l++;
        r--;
    } 
};