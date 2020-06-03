/*给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

    如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii*/

var intersect1 = function(nums1, nums2) {
    let hash = new Map();
    let res = [];
    for(let i = 0; i <nums1.length;i++){
        if(hash.has(nums1[i])){
            hash.set(nums1[i],hash.get(nums1[i])+1);
        }else{
            hash.set(nums1[i],1);
        }
    }
    for(let j = 0; j < nums2.length;j++){
        let item = nums2[j];
        if(hash.has(item)){
            res.push(item);
            if(hash.get(item)>1){
                hash.set(item,hash.get(item)-1);
            }else{
                hash.delete(item)
            }
        }
    }
    return res;
};

var intersect = function(nums1,nums2){
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let i = 0; j = 0;
    let res = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }else if(nums1[i] > nums2[j]){
            j++;
        }else if(nums1[i] === nums2[j]){
            res.push(nums1[i]);
            i++;
            j++;
        }
    }
    return res;
};


let arr1 =[61,24,20,8];
let arr2 = [5,25,8,20];
console.log(intersect(arr1, arr2));
