/**
 *  给定一个二维网格和一个单词，找出该单词是否存在于网格中。

    单词必须按照字母顺序，通过相邻的单元格内的字母构成，
    其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

    示例:

    board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

    给定 word = "ABCCED", 返回 true
    给定 word = "SEE", 返回 true
    给定 word = "ABCB", 返回 false
 *  
 * 
 */

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m);    // 二维矩阵used，存放bool值
    for (let i = 0; i < m; i++) {
      used[i] = new Array(n);
    }
    // canFind 判断当前点是否是目标路径上的点
    const canFind = (row, col, i) => { // row col 当前点的坐标，i当前考察的word字符索引
      if (i == word.length) {          // 递归结束条件
        return true;
      }
      if (row < 0 || row >= m || col < 0 || col >= n) { // 当前点要存在，不越界
        return false;
      }
      if (used[row][col] || board[row][col] != word[i]) { // 当前点已经访问过，或，非目标点
        return false;
      }
      // 排除掉上面的false情况，当前点是合格的，可以继续递归考察
      used[row][col] = true;  // 记录一下当前点被访问了
  
      const canFindRest = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) ||
        canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1); 
  
      if (canFindRest) { // 基于当前点[row,col]，可以为剩下的字符找到路径
        return true;    
      }
      used[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态，继续考察别的分支
      return false;
    };

    for (let i = 0; i < m; i++) {   // 找 dfs 的入口
        for (let j = 0; j < n; j++) {
          if (board[i][j] == word[0] && canFind(i, j, 0)) { // 找到起点，递归结果true，找到目标路径
            return true; 
          }
        }
    }
    return false; // 怎么样都没有返回true，则返回false
}