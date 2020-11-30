/**
 * 
 *      给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

    让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

    A.length >= 3
    在 0 < i < A.length - 1 条件下，存在 i 使得：
    A[0] < A[1] < ... A[i-1] < A[i]
    A[i] > A[i+1] > ... > A[A.length - 1]
 

    示例 1：

    输入：[2,1]
    输出：false
    示例 2：

    输入：[3,5,5]
    输出：false
    示例 3：

    输入：[0,3,2,1]
    输出：true

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-mountain-array
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

var validMountainArray = function(A) {
    let left = 0,
        len = A.length,
        right = len - 1;
    while(A[left] < A[left + 1] && left + 1 < len)
        left++;
    while(A[right] < A[right - 1] && right > 0)
        right--;
    return  left > 0 && right < len - 1 && left === right ;
};