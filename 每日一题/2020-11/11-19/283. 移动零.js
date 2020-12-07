/**
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

    示例:

    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]

 * 
 * 
 * 
 */

 // 每次0移到最后
var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === 0) {
            for(let j = i+1; j < nums.length; j++){
                if(nums[j] !== 0){
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
    return nums;
};


// ****
var moveZeroes = function(nums) {
    let j = 0;
    for(let i = j+1; i < nums.length;i++){
        if(nums[j] === 0){  // 等于0
            if(nums[i] !== 0){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
            }
        } else { //不等于0
            j++;
        }
    }
    return nums;
}