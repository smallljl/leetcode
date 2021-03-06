/*
 * @Author: your name
 * @Date: 2020-05-31 11:31:04
 * @LastEditTime: 2020-05-31 13:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_06\509. 斐波那契数.js
 */ 
/*
 *  斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
    给定 N，计算 F(N)。

    示例 1：

    输入：2
    输出：1
    解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
    示例 2：

    输入：3
    输出：2
    解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
    示例 3：

    输入：4
    输出：3
    解释：F(4) = F(3) + F(2) = 2 + 1 = 3.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/fibonacci-number
 *
 *
 *
 */ 
var fib = function(N) {
    if(N <= 1 )
        return N;
    let prev = 0,curr = 1;
    for(let i = 2;i <= N;i++){
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};
 