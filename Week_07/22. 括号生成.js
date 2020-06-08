/*
 * @Author: your name
 * @Date: 2020-06-01 22:37:19
 * @LastEditTime: 2020-06-08 18:35:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_07\22. 括号生成.js
 */ 
/*
 *  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

    示例：

    输入：n = 3
    输出：[
        "((()))",
        "(()())",  
        "(())()",
        "()(())",
        "()()()"
        ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/generate-parentheses
 *
 * 
 * 
 *   
 * 
 */ 

/*   
     ["()"]    
     ["(())", "()()"]     [""]
 *   ["((()))", "(()())", "(())()", "()(())", "()()()"]
 *
 *
 */


var generateParenthesis = function(n) {
    let res = [];
    function _f(cur,left,right){
        if(cur.length === 2*n){
            res.push(cur);
            return;
        }
        if(left < n){
            _f(cur+"(",left+1,right);
        }
        if(right < left){
            _f(cur+")",left,right+1);
        }
    }
    _f("",0,0);
    return res;
};
console.log(generateParenthesis(2));

let gen = function(n){
    if(n === 0) return [""];
    let dp = [];
    dp[0] = [""];
    dp[1] = ["()"]; 
    // dp[i] = "(" + dp[j] + ")" + dp[i- j - 1] , j = 0, 1, ..., i - 1
    for(let i = 2; i <= n;i++){
        (!dp[i]) && (dp[i] = []);
        for(let j = 0; j < i; j ++)
            comb(dp[i],dp[j],dp[i-j-1])
    }
    function comb(res,lis1,lis2){
        for(let i = 0; i < lis1.length;i++)
            for(let j = 0; j < lis2.length;j++)
                res.push("("+ lis1[i]  +")" + lis2[j])
    }
    return dp[n];
}


/**
 * bfs
 */
class Node {
    constructor(res,left,right){
        this.res = res,
        this.left = left;
        this.right = right;
    }
}
let gen2 = function(n){
    if(!n) return [""];
    let res = [];
    let queue = [];
    queue.push(new Node("",n,n));
    while(queue.length){
        let curNode = queue.shift();
        (curNode.left === 0 && curNode.right === 0) &&  res.push(curNode.res);
        curNode.left > 0  && 
            queue.push(new Node(curNode.res+"(",curNode.left-1,curNode.right));
        (curNode.right > 0 &&  curNode.left < curNode.right) && 
            queue.push(new Node(curNode.res+")",curNode.left,curNode.right-1));
    }
    return res;
}