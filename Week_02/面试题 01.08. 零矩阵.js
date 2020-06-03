/*
 *
 *
 *  编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

    示例 1：
    输入：
    [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    输出：
    [
        [1,0,1],
        [0,0,0],
        [1,0,1]
    ]
    示例 2：
    输入：
    [
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
    ]
    输出：
    [
        [0,0,0,0],
        [0,4,5,0],
        [0,3,1,0]
    ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/zero-matrix-lcci
 *
 *
 */
let arr = [[1,1,1],[1,0,1],[1,1,1]];
// 暴力枚举
var setZeroes = function(matrix) {
    let arr = [];
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(matrix[i][j] === 0){
                arr.push([i,j]);
            }
        }
    }
    let rows = [];
    let cols = [];
    for(let i = 0; i < arr.length;i++){
        rows.push(arr[i][0]);
        cols.push(arr[i][1]);
    }
    for(let i = 0; i < matrix.length;i++){
        if(rows.includes(i)){
            for(let j = 0; j < matrix[i].length;j++){
                matrix[i][j] = 0;
            }
        }    
    }
    for (let i = 0; i < matrix[0].length; i++) {
        if (cols.includes(i)) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    return matrix;
 };

 let arr1 = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ];
 console.log(setZeroes(arr1));