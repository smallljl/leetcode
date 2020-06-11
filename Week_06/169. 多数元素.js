/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

   你可以假设数组是非空的，并且给定的数组总是存在多数元素。

   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/majority-element
 * 
 * 
 */ 
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length / 2) ];
};

var gen2 = function(nums) {
  let len = nums.length;
  let map = {};
  let num = 0;
  for(let i = 0;i < len; i++){
      (map[nums[i]]) ? (map[nums[i]]++) : (map[nums[i]]=1);
      if(map[nums[i]] > len / 2){
          num = nums[i];
          break;
      } 
  }
  return num;
};