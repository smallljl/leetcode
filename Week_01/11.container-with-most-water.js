/*给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。
图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例：
输入：[1,8,6,2,5,4,8,3,7]
输出：49*/
// 11 .https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
// 枚举  O(n^2)
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length-1;++i){
        for(let j = i+1;j < height.length;j++){
            let area = (j-i)*Math.min(height[i],height[j]);
            max = Math.max(max, area);
        }
    }
    return max;
};

// O(n) 左右边界同时向中间收敛  *****
var maxArea = function(a){
    let max = 0;
    let left = 0;
    let right = a.length- 1;
    while(left < right){
      let minHeight = a[left] < a[right] ? a[left++] : a[right--];
      let area = (right-left+1)*minHeight;   // right - left  + 1  间距 
      max = Math.max(max,area);
    } 
    return max;
};

var maxArea1 = function(a){
  // step.1 最大值是如何得出的，稍微思考就能得出最大值是通过“长x高”
  // step.2 max(min(EveryItem, EndItem) * (MaxIndex - CurrentIndex))
  let r = 0;
  let [i, l] = [0, height.length - 1];
  while (i < l) {
    let x = l - i; // 取当前柱子末尾柱子的长
    //let y = height[i] > height[l] ? height[l] : height[i]; // Math.min,取更矮那个柱子的高
    //后发现：如果当前柱比末尾的柱子更高的时候？那么末尾柱需要向前移
    let y = height[i] > height[l] ? height[l--] : height[i++];  // 取比较低的高度
    let s = x * y; // 长 x 高
    if (s > r) { // Math.max,取最大值
      r = s;
    }
  }
  return r;
}