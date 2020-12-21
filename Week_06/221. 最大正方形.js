/*
    在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

    示例:

    输入: 

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

    输出: 4

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/maximal-square
 */ 

 /**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix || !matrix.length) return 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp = [];
    for(let i = 0; i < rows; i++){
        dp[i] = new Array(cols).fill(0);
    }
    let max = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j] === "0" || !i || !j ){
                dp[i][j] = matrix[i][j] - '0' 
            } else {
                // 左边 右边 左上方 最小值   + 1
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]) + 1;
            }
            max = Math.max(max,dp[i][j]);
        }
    }
    return max**2;
};