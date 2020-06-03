/*给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

    滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7


提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof*/


var maxSlidingWindow1 = function(nums, k) {
    if(nums.length === 0) return [];
    let j = 0;
    let arr = [];
    for(let i = j+k-1; i < nums.length;i++){
        let res = getMin(j,i);
        j++;
        arr.push(res)
    }
    return arr;
    function getMin(start,end){
        let max = nums[start];
        for(let i= start+1; i <= end;i++){
            if(nums[i] > max){
                max = nums[i]
            }
        }
        return max;
    }
};

var maxSlidingWindow = function(nums,k){
    if(k === 0) return [];
    const length = nums.length;
    if(length === 0) return [];
    let deque = [];
    for(let i = 0; i < k ;i++){
        clearQueue(nums,deque,i,k);
        deque.push(i);
    }
    let res = [];
    res.push(nums[deque[0]]);
    for(let i = k; i < length;i++){
        clearQueue(nums,deque,i,k);
        deque.push(i);
        res.push(nums[deque[0]]);
    }
    return res;
    function clearQueue(nums,queue,idx,k){
        if(queue.length && idx >= k + deque[0]){
            queue.shift();
        }
        while(queue.length && nums[idx] > nums[deque[deque.length-1]]){
            queue.pop();
        }
    }
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));
