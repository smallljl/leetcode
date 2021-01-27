/*
 *
 *
 *   皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

    上图为 8 皇后问题的一种解法。

    给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

    每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

    示例:

    输入: 4
    输出: [
    [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],

    ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
    ]
    解释: 4 皇后问题存在两个不同的解法。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/n-queens
 * 
 * 
 * 
 * 
 */ 
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
   const res = [];
   const cols = new Set();
   const pies = new Set();
   const nas = new Set();
   const recurison = function(row,queens){
       if(row >= n){
           res.push(queens.slice(0));
           return;
       }
       for(let col = 0; col < n; col++){
           if(cols.has(col) || pies.has(col+row) || nas.has(col-row)){
               continue;
           }
           cols.add(col);
           pies.add(col+row);
           nas.add(col-row);
           queens.push(col);
           recurison(row+1,queens);
           queens.pop();
           cols.delete(col);
           pies.delete(col+row);
           nas.delete(col-row);
       }
   }
   recurison(0,[]);
   const generateCheckerboard = function(res){
       return res.map(queens=>{
           return queens.map(q=>{
               return Array(n).fill().map((k,i)=> {return i === q ? "Q" : '.'}).join("");
           })
       })
   }
   return generateCheckerboard(res);
};