/***
 * 
 *  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

    问总共有多少条不同的路径？

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/unique-paths

    例如，上图是一个7 x 3 的网格。有多少可能的路径？

    示例 1:

    输入: m = 3, n = 2
    输出: 3
    解释:
    从左上角开始，总共有 3 条路径可以到达右下角。
    1. 向右 -> 向右 -> 向下
    2. 向右 -> 向下 -> 向右
    3. 向下 -> 向右 -> 向右
    示例 2:

    输入: m = 7, n = 3
    输出: 28

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/unique-paths
 * 
 * 
 * 
 */
var uniquePaths = function(m, n) {
    // m 行  n 列
    let dp = new Array(m);   // m 行  
    for(let i = 0; i < m; i++){ // 
        dp[i] = new Array(n); 
        dp[i][0] = 1;  // 第一列为1
    }
    for(let r = 0; r < n;r++)
        dp[0][r] = 1;  // 第一行为1
    for(let i = 1;i < m;i++)
        for(let j = 1;j < n;j++)
            dp[i][j] = dp[i-1][j] + dp[i][j-1];    // 上面（往下）  左边(往右)
    return dp[m-1][n-1];
 }; 
 
 var uniquePaths1 = function(m,n){
     let dp = new Array(n).fill(1);
     for(let i = 1; i < m;i++){
         for(let j = 1;j<n;j++){
             dp[j] += dp[j-1];
         }
     }
     return dp[n-1];   //  从第一行到  一行一行往下
     // [ 1,1,1,1
     //   1,2,3,4
     //   1,3,6,10
     //   1,4,10,16]
  }