/*
 * @Author: your name
 * @Date: 2020-05-30 19:38:17
 * @LastEditTime: 2020-05-31 13:28:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_06\70. 爬楼梯.js
 */ 
/**
 * 
 *      假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

        每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

        注意：给定 n 是一个正整数。

        示例 1：

        输入： 2
        输出： 2
        解释： 有两种方法可以爬到楼顶。
        1.  1 阶 + 1 阶
        2.  2 阶
        示例 2：

        输入： 3
        输出： 3
        解释： 有三种方法可以爬到楼顶。
        1.  1 阶 + 1 阶 + 1 阶
        2.  1 阶 + 2 阶
        3.  2 阶 + 1 阶

        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/climbing-stairs
 * 
 * 
 * 
 */
var climbStairs = function(n) {
    function _climbStairs(n){
       if(n < 0){
          return 0
       }
       if(n=== 0){
           return 1;
       }
       return _climbStairs(n-1)+_climbStairs(n-2);
    }
    return _climbStairs(n)
};

var climbStairs4 = function(){
    if(n <= 1){
        return 1;
    }
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
}

// 滚动优化
var climbStairs5 = function(){
    if(n <= 1){
        return 1;
    }
    let prev = 1,curr = 1;
    for(let i = 2; i <= n; i++){
        let next = prev + curr;
        prev =  curr;
        curr = next;
    }
    return curr;
}

//  假设  可以 1 级   2级  3级 (easy)
var climbStairs2 = function(n){
    function _climbStairs(n){
        if(n < 0){
            return 0;
        }
        if(n === 0){
            return 1;
        }
        return _climbStairs(n-1) + _climbStairs(n-2) + _climbStairs(n-3);
    }
} 
//  1 2 3 级可调  相邻两步的步伐不能相同  (medium)
var climbStairs3 = function(n){
    function _climbStairs(n){
        if(n < 0){
            return 0;
        }
        if(n === 0){
            return 1;
        }
        // 剪枝
        return _climbStairs(n-1,1) + _climbStairs(n-2) + _climbStairs(n-3);
    }
}  