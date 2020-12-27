/**
 * 
 *  给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
    示例 1：


    输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    输出：6
    解释：最大矩形如上图所示。
    示例 2：

    输入：matrix = []
    输出：0
    示例 3：

    输入：matrix = [["0"]]
    输出：0
    示例 4：

    输入：matrix = [["1"]]
    输出：1
    示例 5：

    输入：matrix = [["0","0"]]
    输出：0
 * 
 */

 /**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
   if(matrix === null || matrix.length === 0) return 0;
   let rows = matrix.length,cols = matrix[0].length;
   let grid = new Array(rows);
   for(let i = 0; i < rows; i++){
       grid[i] = new Array(cols);
   }
   buildHistogram(matrix,grid)
   let max = 0;
   for(let i = 0; i < rows; i++){
       max = Math.max(max,maxRec(grid,i));
   }
   return max;
};

function buildHistogram(matrix,grid){
   // 第一行
   for(let j = 0; j < matrix[0].length; j++){
       grid[0][j] = matrix[0][j] === "1" ? 1 : 0;
   }

   for(let i = 1; i < matrix.length; i++){
       for(let j = 0; j < matrix[0].length; j++){
           grid[i][j] = matrix[i][j] === "1" ? grid[i-1][j] + 1 : 0;
       }
   }
}

function maxRec(grid,bottom){
   var maxarea = 0;
   var stack = [-1]; // 存储的下标
   for(var i = 0;i < grid[bottom].length;i++){
       // heights[stack[stack.length-1]]  栈中 最后的值
       while(stack.length > 1 && grid[bottom][i] <= grid[bottom][stack[stack.length-1]]){
           // 栈中最后的下标  stack[stack.length-1]
           // 分别比较前面元素到当前下标的比较
           maxarea = Math.max(maxarea,grid[bottom][stack.pop()] * (i - stack[stack.length-1] - 1));
       }
       stack.push(i);
   }
   while(stack.length > 1){
       maxarea = Math.max(maxarea,grid[bottom][stack.pop()] * (grid[bottom].length - stack[stack.length-1] - 1));
   }
   return maxarea;

   // let stack = [];
   // stack.push(-1);
   // let curIndex = 0;
   // let max = 0;
   // console.log(grid)
   // while(curIndex < grid[bottom].length){
   //     while(stack[stack.length-1] !== -1 && grid[bottom][curIndex] <= grid[bottom][stack.length-1]){
   //         max = Math.max(max,grid[bottom][stack.pop()] * (curIndex - stack[stack.length-1] -1) )
   //     }
   //     stack.push(curIndex);
   //     curIndex++;
   // }
    
   // while(stack[stack.length-1] !== -1){
   //     max = Math.max(max, grid[bottom][stack.pop()] * (grid[bottom].length - stack[stack.length-1] -1 ))
   // }
   // // console.log(max)
   // return max;
}