/*
  n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，
  并且使皇后彼此之间不能相互攻击。

  上图为 8 皇后问题的一种解法。

  给定一个整数 n，返回 n 皇后不同的解决方案的数量。

  示例:

  输入: 4
  输出: 2
  解释: 4 皇后问题存在如下两个不同的解法。
  [
   [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],

   ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/n-queens-ii
 */ 
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  return solve(n, 0, 0, 0, 0);
};

const solve = (n, row, col, pie, na) => {
  if(row === n)
      return 1;
  let count = 0;
  let pos = (~(col | pie | na)) & ((1 << n) -1);   // 1代表为空位  得到当前所有空位
  while(pos !== 0){  // 有空位
      let p = pos & (-pos);  //   取到最低位的
      pos = pos & (pos - 1)  // 表示在p位置上放入皇后
      count += solve(n, row+1, col | p, (pie | p) << 1, (na | p) >> 1);
  }
  return count;
}