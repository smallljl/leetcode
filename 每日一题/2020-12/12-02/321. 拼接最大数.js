/**
 *  给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。
 *  现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。

    求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。

    说明: 请尽可能地优化你算法的时间和空间复杂度。

    示例 1:

    输入:
    nums1 = [3, 4, 6, 5]
    nums2 = [9, 1, 2, 5, 8, 3]
    k = 5
    输出:
    [9, 8, 6, 5, 3]
    示例 2:

    输入:
    nums1 = [6, 7]
    nums2 = [6, 0, 4]
    k = 5
    输出:
    [6, 7, 6, 0, 4]
    示例 3:

    输入:
    nums1 = [3, 9]
    nums2 = [8, 9]
    k = 3
    输出:
    [9, 8, 9]
 * 
 */
var maxNumber = function(nums1, nums2, k) {
    var pickmax = (nums, k) => {
        let stack = [];
        let drop = nums.length - k;
        for (const num of nums) {
            while (stack && stack[stack.length - 1] < num && drop) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        return stack.slice(0, k);
    }

    let merge = (n1,n2) => {
        let res = [];
        while(n1.length || n2.length){
            let bigger = n1 > n2 ? n1 : n2;
            res.push(bigger[0]);
            bigger.shift();
        }
        return res;
    }

    let res = [];
    for(let i = 0; i <= k; i++){
        if(i <= nums1.length && k-i <= nums2.length){  // 提取的最大值
            res.push(merge(pickmax(nums1,i),pickmax(nums2,k-i)));
        }
    }

    return res.sort((a,b)=>{
        if(a > b){
            return -1;
        } else if(a < b){
            return 1;
        } else {
            return 0;
        }
    })[0];

};