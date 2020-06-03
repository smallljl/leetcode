/*
*
*
*   实现 int sqrt(int x) 函数。
    计算并返回 x 的平方根，其中 x 是非负整数。
    由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
    示例 1:
    输入: 4

    输出: 2
    示例 2:

    输入: 8
    输出: 2
    说明: 8 的平方根是 2.82842..., 
         由于返回类型是整数，小数部分将被舍去。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/sqrtx
*
*/
function mySqrt(x){
    if(x === 0 || x === 1)
        return x;
    let left = mid = 1;
    let right = x;
    while(left <= right){
        mid = ~~(left + (right-left)/2);
        (mid * mid > x) ? right = mid - 1 :left = mid + 1;
    }
    return ~~right;
}
console.log(mySqrt(4));
