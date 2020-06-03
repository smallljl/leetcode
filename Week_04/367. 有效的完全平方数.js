/*
 *
 *  给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，
 *  则返回 True，否则返回 False。
    说明：不要使用任何内置的库函数，如  sqrt。

    示例 1：
    输入：16
    输出：True
    
    示例 2：
    输入：14
    输出：False

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-perfect-square
 * 
 * 
 * 
 */
let isPerfectSquare = function(num){
    if(num === 1) return true;
    let left = 1;
    let right = num;
    while(left <= right){
        // >> 1位  表示除于2
        let mid = ~~(left + (right-left)/2);
        let temp = mid>>>1;
        if(temp === num)
            return true;
        else if(temp > num)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return false;
}