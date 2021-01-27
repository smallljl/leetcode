/*
 *
 *  给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

    岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

    此外，你可以假设该网格的四条边均被水包围。

    示例 1:

    输入:
        11110
        11010
        11000
        00000
    输出: 1
    示例 2:

    输入:
        11000
        11000
        00100
        00011
    输出: 3
    解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 * 
 * 
 */ 
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let n,m;

    function numIslands(grid){
          
        let count = 0;
        n = grid.length;
        if(n === 0) return 0;  // 0行
        m = grid[0].length;
        for(let i = 0; i < n;i++){
            for(let j = 0; j < m;j++){
                if(grid[i][j] === "1"){
                    DFSMarking(grid,i,j);
                    ++count;
                }
            }
        }
        return count;
    }

    function DFSMarking(grid,i,j){
        if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== "1"){
            return;
        }
        grid[i][j] = "0";
        DFSMarking(grid,i+1,j);
        DFSMarking(grid,i-1,j);
        DFSMarking(grid,i,j+1);
        DFSMarking(grid,i,j-1);
    }

    return numIslands(grid);
};