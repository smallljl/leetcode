/**
    请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

    [["a","b","c","e"],
    ["s","f","c","s"],
    ["a","d","e","e"]]

    但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

     

    示例 1：

    输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    输出：true
    示例 2：

    输入：board = [["a","b"],["c","d"]], word = "abcd"
    输出：false


 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, str) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(_dfs(board,str,0,i,j))
                return true;
        }
    }
    return false;
};

function _dfs(board,str,u,x,y){
    console.log(board[x][y]);
    if(board[x][y] != str[u]) return false;
    if(u === str.length - 1) return true;
    let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    let t = board[x][y];
    board[x][y] = "*"; // 走过了
    // 四个方向
    for(let i = 0; i < 4; i++){
        let a = x + dx[i], b = y + dy[i];
        if(a >= 0 && a < board.length && b >= 0 && b < board[a].length){
            if(_dfs(board,str,u+1,a,b)) return true;
        }
    }
    board[x][y] = t;
    return false;
}  