/*
  给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

  你需要返回给定数组中的重要翻转对的数量。

  示例 1:

  输入: [1,3,2,3,1]
  输出: 2
  示例 2:

  输入: [2,4,3,5,1]
  输出: 3

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-pairs
 */ 
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0;
  let mergeArr = (left,right) => {
      let result = [];
      let left_i = 0;
      let right_j = 0;
      let tmpI = 0,tmpJ = 0;
      while(tmpI < left.length && tmpJ < right.length){
          if(left[tmpI]/2 > right[tmpJ]){
              count += left.length - tmpI;
              tmpJ++;
          }else{
              tmpI++;
          }
      }
      while(left_i < left.length && right_j < right.length){
          if(left[left_i] < right[right_j]){
              result.push(left[left_i++]);
          }else{
              result.push(right[right_j++]);
          }
      }
      return [...result,...left.slice(left_i),...right.slice(right_j)];
  }
let mergeSort = (arr)=>{
  if(arr.length <= 1){
      return arr;
  }
  let mid = arr.length >> 1;
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  return mergeArr(mergeSort(left),mergeSort(right));
}
mergeSort(nums);
return count;
};