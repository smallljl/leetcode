/*给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

示例 1：

输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
示例 2：

输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array*/


var sortedSquares = function(A) {
    for(let i = 0; i < A.length; i++){
        A[i] = Math.pow(A[i],2)
    }
    A.sort((a,b)=>a-b);
    return A;
};


// 从中间向两边
var sortedSquares1 = function(A){
    let i = 0;
    let len = A.length;
    let arr = [];
    let arrIndex = 0;
    while(i < len &&  A[i] < 0){
        i++;
    }
    let j = i-1;
    while(j >= 0 && i < len){
        if(Math.pow(A[i],2) < Math.pow(A[j],2)){
          arr[arrIndex] = Math.pow(A[i],2);
          arrIndex++;
          i++;
        }else{
          arr[arrIndex] = Math.pow(A[j],2);
          arrIndex++;
          j--;
        }
    }
    while(i<len){
        arr[arrIndex++] = Math.pow(A[i],2);
        i++;
    }
    while(j>=0){
        arr[arrIndex++] = Math.pow(A[j],2);
        j--;
    }
    return arr;
};

// 从两边向中间
var sortedSquares2 = function(A){
    let len = A.length;
    let arr = [];
    let L = 0;
    let R = len-1;
    let k = R;
    while(k >= 0){
        let lef = Math.pow(A[L], 2);
        let rig = Math.pow(A[R], 2);
        if(lef < rig){
            arr[k] = rig;
            R--;
        }else {
            arr[k] = lef;
            L++;
        }
        k--;
    }
    return arr;
};
console.log(sortedSquares2([-4, -1, 0, 3, 10]));

// 国际站 优化  双指针向中间
var sortedSquares3 = function(A){
    let i = 0, j = A.length - 1;
    let res = [];
    let index = A.length - 1;
    while (i <= j) {
        if (i === j)
            res[index] = A[i] * A[i];
        if (Math.abs(A[i]) <= Math.abs(A[j])) {
            res[index--] = A[j] * A[j];
            j--;
        } else {
            res[index--] = A[i] * A[i];
            i++;
        }
    }
    return res;
};