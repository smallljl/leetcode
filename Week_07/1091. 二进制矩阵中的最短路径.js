/*
 *
 *  在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
    一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
    相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
    C_1 位于 (0, 0)（即，值为 grid[0][0]）
    C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
    如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
    返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
    示例 1：
    输入：[[0,1],[1,0]]
    输出：2
    示例 2：
    输入：[[0,0,0],[1,1,0],[1,1,0]]
    输出：4
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/shortest-path-in-binary-matrix
 * 
 * 
 * 
 * 
 * 
 */
var shortestPathBinaryMatrix = function(grid) {
   if(grid[0][0]) return -1;
    const row = grid.length-1, col = grid[0].length-1;
    if(grid[row][col]) return -1;

    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const queue = [[0,0]];
  
    grid[0][0] = 1;

    let res = 0, i = queue.length, newX, newY, temp;

    while(i){
        res++;
        while(i--){
            temp  = queue.shift();
            if(temp[0] === row && temp[1] === col) return res;
            dirs.forEach(dir => {
                newX = temp[0] + dir[0];
                newY = temp[1] + dir[1];
                if(newX < 0 || newX > row || newY < 0 || newY > col || grid[newX][newY]) return
                queue.push([newX,newY]);
                grid[newX][newY] = 1; 
            })
        }
        i = queue.length;
    }
    return -1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const row = grid.length, col = grid[0].length;
  
  if (grid.length == 1) {
    return grid[0][0] == 0 ? 1 : -1;
  }

  if ((grid[0][0] == 1) || (grid[row-1][col-1] == 1)) {
    return -1;
  }


  if(grid[row-1][col-1]) return -1;

  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  let len = 1;

  let startQueue = [[0,0]];
  let endQueue = [[row-1,col-1]];
  let startVisited = new Array(row);
  let endVisited = new Array(row);
  let visited = new Array(row);
  for(let i = 0; i < row; i++){
    startVisited[i] = new Array(col).fill(false);
    endVisited[i] = new Array(col).fill(false);
    visited[i] = new Array(col).fill(false);
  }

  visited[0][0] = true;
  visited[row-1][col-1] = true;
  startVisited[0][0] = true;
  endVisited[row-1][col-1] = true;

  while(startQueue.length && endQueue.length){
    if(startQueue.length > endQueue.length){
      let temp = startQueue;
      startQueue = endQueue;
      endQueue = temp;
    
      let tempA = startVisited;
      startVisited = endVisited;
      endVisited = tempA;
    }

    let newQueue = [];
    for(let curSta of startQueue){
      for(let i = 0; i < dirs.length; i++){
        let dir = dirs[i];
        let newX = curSta[0] + dir[0];
        let newY = curSta[1] + dir[1];
      
        if(newX >= 0 && newX < row && newY >= 0 && newY < col && grid[newX][newY] === 0){
          if(endVisited[newX][newY]){
            return len + 1;
          }
          if(visited[newX][newY]) continue;
          newQueue.push([newX,newY]);
          visited[newX][newY] = true;
          startVisited[newX][newY] = true;
        } 
      }
    }
    startQueue = newQueue;
    len++;
  }
  return -1;
};