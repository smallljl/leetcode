/*
*   实现 pow(x, n) ，即计算 x 的 n 次幂函数。
    示例 1:
    输入: 2.00000, 10
    输出: 1024.00000
    示例 2:
    输入: 2.10000, 3
    输出: 9.26100
    示例 3:
    输入: 2.00000, -2
    输出: 0.25000
    解释: 2-2 = 1/22 = 1/4 = 0.25
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/powx-n
*/
var myPow = function(x, n) {
    function _myPow(x,n){
        if(n < 0)
            return 1/ _myPow(x,-n);
        if(n === 0)
            return 1;
        let half = _myPow(x,Math.floor(n/2));
        if(n % 2 === 0)
            return half * half;
        else
            return half * half * x;
    }
    return _myPow(x,n);
};