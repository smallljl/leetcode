/**
 * 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。

 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样的路线，则输出 -1。

 示例 1:
 输入:
 n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 src = 0, dst = 2, k = 1
 输出: 200
 解释:
 城市航班图如下


 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
 示例 2:
 输入:
 n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 src = 0, dst = 2, k = 0
 输出: 500
 解释:
 城市航班图如下


 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
 提示：

 n 范围是 [1, 100]，城市标签从 0 到 n - 1.
 航班数量范围是 [0, n * (n - 1) / 2].
 每个航班的格式 (src, dst, price).
 每个航班的价格范围是 [1, 10000].
 k 范围是 [0, n - 1].
 航班没有重复，且不存在环路

 * @param fights
 * @param src
 * @param dst
 * @param k
 * @returns {number}
 */

export default (fights, src, dst, k) => {
  // 将fights作为参数和LeetCode一致
  let cheap = (fights, src, dst, k) => {
    let prev = fights.filter(item => item[1] === dst);
    let min = Math.min.apply(null, prev.map(item => {
      if (item[0] === src && k > -1) {
        return item[2];
      } else if (k === 0 && item[0] !== src) {
        return Number.MAX_SAFE_INTEGER;
      } else {
        return item[2] + cheap(fights, src, item[0], k - 1);
      }
    }));
    return min;
  };
  // 增加返回值是不是Number.MAX_SAFE_INTEGER，如果是返回-1
  let min = cheap(fights, src, dst, k);
  return min >= Number.MAX_SAFE_INTEGER ? -1 : min
}

//动态转移方程
// F(src,dst,k) = Min( F(src,dst-1,k-1)+  F(dst-1,dst,1) )
