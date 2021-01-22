/*
 *
 *  给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

    找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

    示例:

    X X X X
    X O O X
    X X O X
    X O X X
    运行你的函数后，矩阵变为：

    X X X X
    X X X X
    X X X X
    X O X X

   解释:

   被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 
   任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。
   如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 * 
 * 
 * 
 */ 

// 并查集
/**
 * @param {character[][]} board
 * @return {void} 
 */
var solve = function (board) {
   // JavaScript
   class unionFind {
       constructor(n) {
           this.count = n;
           this.parent = new Array(n);
           for (let i = 0; i < n; i++) {
               this.parent[i] = i;
           }
       }

       find(p) {
           let root = p;
           while (this.parent[root] !== root) {
               root = this.parent[root];
           }
           // 压缩路径
           // 每个节点的父节点指向跟节点
           while (this.parent[p] !== p) {
               let x = p;
               p = this.parent[p];
               this.parent[x] = root;
           }
           return root;
       }

       union(p, q) {
           let rootP = this.find(p);
           let rootQ = this.find(q);
           if (rootP === rootQ) return;
           this.parent[rootP] = rootQ;
           this.count--;
       }
       isConnected(x, y) {
           return this.find(x) === this.find(y)
       }
   }

   let row = board.length;
   if (row == 0) return;
   let col = board[0].length;
   let dummy = row * col;
   let uf = new unionFind(dummy);
   let arr = [[1, 0], [0, 1], [-1, 0], [0, -1]];
   for (let i = 0; i < row; i++) {
       for (let j = 0; j < col; j++) {
           if (board[i][j] == 'O') {
               if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                   uf.union(i * col + j, dummy)
               } else {
                   //考察四个方向
                   for (let k = 0; k < 4; k++) {
                       let x = i + arr[k][0];
                       let y = j + arr[k][1];
                       if (board[x][y] == 'O') uf.union(x * col + y, i * col + j);
                   }
               }
           }
       }
   }
   for (let i = 1; i < row - 1; i++) {
       for (let j = 1; j < col - 1; j++) {
           if (!uf.isConnected(i * col + j, dummy)) board[i][j] = 'X';
       }
   }

};