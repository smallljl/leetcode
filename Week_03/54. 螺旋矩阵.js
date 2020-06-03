/*
 * @Author: your name
 * @Date: 2020-04-28 22:32:43
 * @LastEditTime: 2020-04-29 09:05:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_03\54. 螺旋矩阵.js
 */
/*
 *  不理解
 *  给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
    示例 1:
    输入:
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
    输出: [1,2,3,6,9,8,7,4,5]
    示例 2:
    输入:
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]
    输出: [1,2,3,4,8,12,11,10,9,5,6,7]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/spiral-matrix
 * 
 */
var spiralOrder = function(matrix){
    let list = [];
    if(matrix.length === 0) return list;
    let m = matrix.length;  // 行
    let n = matrix[0].length; // 列
    let count =  parseInt((Math.min(m,n)+1)/2);   //  计算的层数
    let i = 0;
    while(i < count){
        for (let j = i; j < n-i; j++) {
            list.push(matrix[i][j]);
        }
        for (let j = i+1; j < m-i; j++) {
            list.push(matrix[j][(n-1)-i]);
        }
        // m-1-i != i  不是同一层
        for (let j = (n-1)-(i+1); j >= i && (m-1-i != i); j--) {
            list.push(matrix[(m-1)-i][j]);
        }
        // n-1-i != i  不是同一列
        for (let j = (m-1)-(i+1); j >= i+1 && (n-1-i) != i; j--) {
            list.push(matrix[j][i]);
        }
        i++;
    }
    return list;
}
let arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
console.log(spiralOrder(arr));
