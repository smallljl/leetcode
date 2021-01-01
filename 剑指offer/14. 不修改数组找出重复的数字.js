/**
 *  给定一个长度为 n+1 的数组nums，数组中所有的数均在 1∼n 的范围内，其中 n≥1。

    请找出数组中任意一个重复的数，但不能修改输入的数组。

    样例
    给定 nums = [2, 3, 5, 4, 3, 2, 6, 7]。

    返回 2 或 3。
    思考题：如果只能使用 O(1) 的额外空间，该怎么做呢？
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateInArray = function(nums) {
    let n = nums.length;
    let l = 1, r = nums.length-1;  // 区间的取值范围  [1,n]
    while(l < r){
        let mid = l + r >> 1; // [1,mid][mid+1,r]
        let s = 0;
        for(let i = 0; i < n; i++){
            if(nums[i] >= l && nums[i] <= mid){
                s++; 
            }
        }
        if(s > mid - l + 1){
            r  = mid;  // 在左边值的范围
        } else {
            l = mid + 1; // 在右边值的范围
        }
    }
    return r;
};