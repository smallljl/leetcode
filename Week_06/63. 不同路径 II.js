/*
 * @Author: your name
 * @Date: 2020-05-31 15:26:58
 * @LastEditTime: 2020-05-31 15:28:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_06\63. 不同路径 II.js
 */ 
/*
 *
 *  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

    网格中的障碍物和空位置分别用 1 和 0 来表示。

    说明：m 和 n 的值均不超过 100。

    示例 1:

    输入:
    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
    输出: 2
    解释:
    3x3 网格的正中间有一个障碍物。
    从左上角到右下角一共有 2 条不同的路径：
    1. 向右 -> 向右 -> 向下 -> 向下
    2. 向下 -> 向下 -> 向右 -> 向右

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/unique-paths-ii
 * 
 * 
 *
 *
 */ 
var uniquePathsWithObstacles = function(obstacleGrid) {
    var row = obstacleGrid.length; // 行
    var col = obstacleGrid[0].length; // 列
    var dp = new Array(row);
    for(let i = 0; i < row;i++){
        dp[i] = new Array(col).fill(0)
    }
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    // 如果起点是障碍物
    if(dp[0][0] === 0){
        return 0;
    }
    // 第一行
    for(let i = 1;i < col;i++){
        if(obstacleGrid[0][i] !== 1){
            dp[0][i] = dp[0][i-1];
        }
    }
    // 第一列
    for(let j =1; j < row; j++){
        if(obstacleGrid[j][0] !== 1){
            dp[j][0] = dp[j-1][0];
        }
    }
    // 动态递推
    for(let i = 1; i < row;i++){
        for(let j = 1;j < col; j++){
            if(obstacleGrid[i][j] !== 1){
                dp[i][j] = dp[i-1][j] + dp[i][j-1];  //   上面  + 左边
            }
        }
    }
    return dp[row-1][col-1];
};
