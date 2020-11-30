/**
 *  给定两个数组，编写一个函数来计算它们的交集。

 

    示例 1：

    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]
    示例 2：

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]

 * 
 * 
 */
var _intersection = function(set1,set2){
    if(set1.size > set2.size){
        _intersection(set2,set1);
    }
    const intersection = new Set();
    for(let item of set2){
        if(set1.has(item)){
           intersection.add(item);
        }
    }
    return [...intersection];
  }
  
  var intersection = function(nums1, nums2) {
     const set1 = new Set(nums1);
     const set2 = new Set(nums2);
     return _intersection(set1, set2);
  };