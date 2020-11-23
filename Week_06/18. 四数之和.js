/**
 *      给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 
        注意：

        答案中不可以包含重复的四元组。
     
        示例：  
   
        给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

        满足要求的四元组集合为：
        [
           [-1,  0, 0, 1],
           [-2, -1, 1, 2],
           [-2,  0, 0, 2]
        ]
 
        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/4sum
 * 
 * 
 * 
 * 
 */  

let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
var fourSum = function(nums, target) {
      let res = [];
      for(let i = 0; i < nums.length-3; i++){
         for(let j = i+1; j < nums.length-2;j++){
            for(let k = j+1; k < nums.length-1;k++){
                  for(let m = k+1; m < nums.length;m++){
                     let sum = nums[i] + nums[j] + nums[k] + nums[m];
                     if(sum  === target){
                        res.push([nums[i],nums[j],nums[k],nums[m]]);
                     }
                  }
            }
         }
      }
      return res;
};

let gen = (nums,target)=>{
   let result = [];
   let len = nums.length;
   if(nums === null || len < 4) return [];
   nums.sort((a,b)=>a-b);
   for(let i = 0; i < len - 3;i++){
      if(i>0 && nums[i] === nums[i-1]) continue;
      let min1 = nums[i] + nums[i+1] + nums[i+2] + nums[i+3];
      if(min1 > target) break;
      let max1 = nums[i] + nums[len-1] + nums[len-2] + nums[len-3];
      if(max1 < target) continue;
      for(let j = i+1; j < len - 2;j++){
         if(j > i+1 && nums[j] === nums[j-1]) continue;
         let min2 = nums[i] + nums[j] + nums[j+1] + nums[j+2];
         if(min2 > target) break;
         let max2 = nums[i] + nums[j] + nums[len-1] + nums[len-2];
         if(max2 < target) continue;
         let left = j+1;
         let right = len-1;
         while(left < right){
            let sum = nums[i] + nums[j] + nums[left] + nums[right];
            if(sum === target){
                  result.push([ nums[i],nums[j],nums[left],nums[right]])
                  while(left < right && nums[left] === nums[left + 1]) left++;
                  while(left < right && nums[right] === nums[right - 1]) right--;
                  left ++;
                  right --;
            } else 
                  sum > target ? right-- : left++;
         }
      }
   }
   return result;
}
