/**
 *
 *   给定一个大小为 n 的数组，找到其中的多数元素。
     多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
     你可以假设数组是非空的，并且给定的数组总是存在多数元素。
     示例 1:
     输入: [3,2,3]
     输出: 3
     示例 2:
     输入: [2,2,1,1,1,2,2]
     输出: 2
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/majority-element
 *
 */
var majorityElement2 = function(nums) {
    nums.sort((a,b) => a - b)
    return nums[Math.floor(nums.length / 2) ]
};

var majorityElement1 = function(nums){
    let count = 1;
    let majority = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count ++;
        } else {
            count --;
        }
    }
    return majority;
};

// hash 算法
var majorityElement3 = function(nums){
    let map = new Map();
    for(let i = 0; i < nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1);
        }
    }
    console.log(map.entries());  //[Map Iterator] { [ 3, 2 ], [ 2, 1 ] }
    for(let item of map.entries()){
        if(item[1] > nums.length/2){
            return item[0];
        }
    }
};

var majorityElement = function(nums){
    function _majorityElement(nums,left,right){
        if(left === right){
            return nums[left];
        }
        let mid = parseInt((left+right)/2);
        let leftValue = _majorityElement(nums,left,mid); // 左边的众数
        let rightValue = _majorityElement(nums,mid+1,right); // 右边的众数
        if(leftValue === rightValue) return leftValue;
        let leftCount = _getCount(nums,leftValue,left,right);  //  左边的众数个数
        let rightCount= _getCount(nums,rightValue,left,right);  // 右边的众数个数
        return leftCount > rightCount ? leftValue : rightValue;
    }

    function _getCount(nums,num,low,high){
        let count = 0;
        for(let i = low; i <= high;i++){
            if(nums[i] === num){
                count++;
            }
        }
        return count;
    }
    return _majorityElement(nums,0,nums.length-1);
};
// 分治发

console.log(majorityElement([3, 2, 3,4,5,7,2,2,4]));