/**
 *  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

    示例 1：

    输入：[3,4,5,1,2]
    输出：1
    示例 2：

    输入：[2,2,2,0,1]
    输出：0

 * 
 * 
 */

 /**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let n = numbers.length-1;
    if(n < 0) return -1;
    while(n > 0 && numbers[n] == numbers[0]) n--;
    let l = 0, r = n;
    while(l < r){
        const mid = l + r >>> 1;
        if(numbers[mid] > numbers[r]){
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return numbers[l];
};