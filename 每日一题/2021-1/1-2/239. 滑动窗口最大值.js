/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

    返回滑动窗口中的最大值。

    示例 1：

    输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
    输出：[3,3,5,5,6,7]
    解释：
    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
    示例 2：

    输入：nums = [1], k = 1
    输出：[1]
    示例 3：

    输入：nums = [1,-1], k = 1
    输出：[1,-1]
    示例 4：

    输入：nums = [9,11], k = 2
    输出：[11]
    示例 5：

    输入：nums = [4,-2], k = 2
    输出：[4]

 * 
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    let res = [];
    for(let i = 0;i < n - k + 1;i++){
        let max = Number.MIN_SAFE_INTEGER;
        for(let j = i;j < i + k;j++){
            max = Math.max(max,nums[j]);
        }
        res.push(max);
    }
    return res;
};

 /**
 * @param {number[]} nums  单调队列
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length == 0 || k == 0) return [];
    let n = nums.length;
    let res = [];
    let q = [];  // 存下标
    for(let i = 0; i < n;i++){
        while(q.length && nums[q[q.length-1]] < nums[i])
            q.pop();
        q.push(i);
        // 下标超出范围就移出
        if(q[0] === i - k)  // 间距  i-k 长度 i-k+1
            q.shift();
        if(i >= k - 1) // k-1 满足 k个数
            res.push(nums[q[0]]);
    }
    return res;
};