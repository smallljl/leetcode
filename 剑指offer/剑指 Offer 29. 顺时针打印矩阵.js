/**
 *  输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 
    示例 1：

    输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
    输出：[1,2,3,6,9,8,7,4,5]
    示例 2：

    输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 * 
 */

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let m = matrix.length;
    if(!m) return res;
    let n = matrix[0].length;
    let st = new Array(m)
    for(let i = 0; i < m; i++)
        st[i] = new Array(n).fill(false);
    // 左 上 右 下
    let dx = [-1,0,1,0], dy = [0,-1,0,1];
    let x = 0, y = 0, d = 2;
    for(let i = 0; i < m * n; i++){
        res.push(matrix[y][x]);
        st[y][x] = true;
        let a = x + dx[d], b = y + dy[d];
        if(a < 0 || a >= n || b < 0 || b >= m || st[b][a]){
            d = (d + 1) % 4;
            a = x + dx[d], b = y + dy[d]
        }
        x = a, y = b;
    }
    return res;
};