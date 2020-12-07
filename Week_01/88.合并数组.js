/*
88. 合并两个有序数组
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明:
    初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

    输入:
        nums1 = [1,2,3,0,0,0], m = 3
        nums2 = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6];*/
var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n ; i++)
        nums1[m+i] = nums2[i];
    return nums1.sort((a,b)=>a-b);
};

var merge1 = function(nums1, m, nums2, n) {
    let i = m + n - 1;  // 最后一个
    let i1 = m - 1, i2 = n - 1;
    while(i1 >= 0 && i2 >= 0){
      if(nums1[i1] > nums2[i2]){
          nums1[i--] = nums1[i1--];
      } else {
          nums1[i--] = nums2[i2--];
      }
    }
    // 有一个遍历完了
    while(i >= 0 && i1 >= 0){
        nums1[i--] = nums1[i1--];
    }
    while(i >= 0 && i2 >= 0){
        nums1[i--] = nums2[i2--];
    }
};


let nums1 = [-1,0];
let nums2 = [1,2,2];
console.log(merge1(nums1, 1, nums2, 3));


