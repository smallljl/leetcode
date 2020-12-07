/**
 *  给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

    如果数组元素个数小于 2，则返回 0。

    示例 1:

    输入: [3,6,9,1]
    输出: 3
    解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
    示例 2:

    输入: [10]
    输出: 0
    解释: 数组元素个数小于 2，因此返回 0。

 * 
 * 
 */

var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    nums.sort((a,b)=>a-b);
    let max = 0;
    for(let i = 1; i < nums.length ; i++){  
        let temp = Math.abs(nums[i] - nums[i-1]);  // 相邻两个比较
        max = Math.max(temp,max);
    }
    return max;
};


// 最大间距 >= (max -min ) / (n - 1) 
var maximumGap = function(nums){
    const n = nums.length;
    if (n < 2) {
        return 0;
    }
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const d = Math.max(1, Math.floor(maxVal - minVal) / (n - 1)); // 间隔 
    const bucketSize = Math.floor((maxVal - minVal) / d) + 1;  // 桶的大小

    const bucket = new Array(bucketSize).fill(0).map(x => new Array(2).fill(0));
    for (let i = 0; i < bucketSize; ++i) {
        bucket[i].fill(-1);
    }
    for (let i = 0; i < n; i++) {
        const idx = Math.floor((nums[i] - minVal) / d);
        if (bucket[idx][0] === -1) {
            bucket[idx][0] = bucket[idx][1] = nums[i];   // 当前桶没值  就当默认值
        } else {
            bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);  // 存桶的最小值
            bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);  // 存桶的最大值
        }
    }

    let ret = 0;
    let prev = -1;
    for (let i = 0; i < bucketSize; i++) {
        if (bucket[i][0] == -1) {
            continue;
        }
        if (prev != -1) {
            ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);  // 第二个桶的最小值 - 前一个桶的最大值
        }
        prev = i;
    }
    return ret;

}