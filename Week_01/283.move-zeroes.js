/*给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
283:
示例:

    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
    说明:

    必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
   var moveZeroes = function(nums) {
       let j = 0; 
       for(let i = 0; i < nums.length;i++){
           if(nums[i] !== 0){
               nums[j] = nums[i];
               if(i !== j){
                   nums[i] = 0;
               }
               j++;
           }
       }
   };

   var moveZeroes1 = function(nums){
       let count = 0;
       for(let i = 0;i < nums.length;i++) {
           if(nums[i] === 0){
               nums.splice(i,1);
               i--;
               count++;
           }
       }
       for(let j = 0; j < count;j++){
           nums.push(0);
       }
   };

   var moveZeroes2 = function(nums){
       if(nums.length < 2){
           return nums;
       }
       let len = nums.length;
       for(let x = 0; x < len; x++){
           if(nums[x] === 0){
             nums.splice(x,1);
             nums.push(0);
             x=x-1;
             len = len-1;
           }
       }
       return nums;
   };

   var moveZeroes3 = function(nums){
      if(!nums) return
      if(nums.length < 2) return nums;
      function swap(arr,i,j){
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
       }
      let i = 0;
      let len = nums.length;
      for(j = i+1;j < len; j++){
          if(nums[i] === 0){
              if(nums[j] !== 0){
                  swap(nums,i,j);
                  i++
              }
          }else{
              i++;
          }
      }
      return nums;
   };

    // 双重for循环交换
var moveZeroes4 = function(nums){
    for(let i = 0; i < nums.length-1;i++){
        if(nums[i] === 0){
            for(let j = i+1;j < nums.length;j++){
                if(nums[j] !== 0){
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
};

