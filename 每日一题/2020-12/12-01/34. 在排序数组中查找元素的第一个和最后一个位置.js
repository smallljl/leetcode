/**
 *      给定一个按照升序排列的整数数组 nums，和一个目标值 target。
 *      找出给定目标值在数组中的开始位置和结束位置。

        如果数组中不存在目标值 target，返回 [-1, -1]。

        进阶：

        你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
         

        示例 1：

        输入：nums = [5,7,7,8,8,10], target = 8
        输出：[3,4]
        示例 2：

        输入：nums = [5,7,7,8,8,10], target = 6
        输出：[-1,-1]
        示例 3：

        输入：nums = [], target = 0
        输出：[-1,-1]

 * 
 * 
 */
var searchRange = function(nums, target) {
    let start = -1;
    let end = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > target){
            if(start !== -1){
                end = i-1;  //  end 就是i的前一个数
            }
            break;
        }
        if(nums[i] === target){
            if(start === -1){  // 赋值一次
                start = i;
            }
        }
    }
    if(start !== -1 && end === -1){ // 后面以target结尾
        end = nums.length - 1;  
    }
    return [start,end];
};

var searchRange = function(nums, target) {
    let mid,midL,midR;
    // 二分查找找右边 
    function _searchR(left, right, target){
        while(left <= right){
            mid = (left + right) >> 1;
            if(nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return right;
    }
    midR = _searchR(0,nums.length-1,target);

    if(midR < 0 || nums[midR] !== target) return [-1,-1];

    midL = _searchR(0,midR-1,target-1);
    return [midL+1,midR];
};


var searchRange = function(nums, target) {
    let mid,start,end;
    // 二分查找找右边 
    function _searchR(nums,target){
        let left = 0,right = nums.length -1;
        let index = -1;
        while(left <= right){
            mid = (left + right) >> 1;
            if(nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
            if(nums[mid] === target){
                index = mid;
            }
        }
        return index;
    }

    function _searchL(nums,target){
        let left = 0, right = nums.length - 1;
        let index = -1;
        while(left <= right){
            mid = (left + right) >> 1;
            if(nums[mid] >= target) right = mid - 1;
            else left = mid + 1;
            if(nums[mid] === target){
                index = mid;
            }
        }
        return index;
    }
    
    start = _searchL(nums,target)
    end = _searchR(nums,target)
    return [start,end];
};