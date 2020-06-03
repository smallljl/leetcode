/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

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
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param arr
 * @param m
 * @param n
 * @returns {number|*}
 */

export default (arr, m, n) => {
  let dp = (m, n) => {
    // 检查起始或者目标元素是不是1（被占用了），如果起始或者最后那个格就是1，说明怎么都怎么不到那，直接返回0
    if (arr[m - 1][n - 1] === 1 || arr[0][0] === 1) {
      return 0
    }
    if (m === 2 && n === 2) {
      return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : ( arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2
    } else if (m < 2 || n < 2) {
      if (m < 2) {
        return arr[m - 1].includes(1) ? 0 : 1
      } else {
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  };
  return dp(m, n)
}
