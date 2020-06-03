/*假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n;
    let f1 = 1;
    let f2 = 2;
    let f3 = 3;
    for(let i =3 ; i <= n;i++){
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};