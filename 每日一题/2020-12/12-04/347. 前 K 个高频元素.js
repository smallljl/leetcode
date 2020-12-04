/**
 *  给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

    示例 1:

    输入: nums = [1,1,1,2,2,3], k = 2
    输出: [1,2]
    示例 2:

    输入: nums = [1], k = 1
    输出: [1]

 * 
 * 
 */

var topKFrequent = function(nums, k) {
    const map = new Map();
    let arr = [...new Set(nums)];
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }else {
            map.set(nums[i],map.get(nums[i]) + 1);
        }
    }
    return arr.sort((a,b)=> map.get(b) - map.get(a)).slice(0,k);
};


// 桶排序
let bucketSort = (map, k) => {
    let arr = [], res = [];
    map.forEach((value,key)=>{
        if(!arr[value]){
            arr[value] = [key];
        } else {
            arr[value].push(key);  // 出现频率相同的数添加到一起
        }
    });
    //  res.length < k 取前k的值
    for(let i = arr.length - 1; i >= 0 && res.length < k; i--){
        if(arr[i]){
            res.push(...arr[i]);
        }
    }
    return res;
}

var topKFrequent = function(nums, k) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }else {
            map.set(nums[i],map.get(nums[i]) + 1);
        }
    }
    // 如果元素数量小于等于k
    if(map.size <= k){
        return [...map.keys()];
    }
    return bucketSort(map,k);
};





/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Heap {
    constructor(list = [], comparator) {
        this.list = list;

        if (typeof comparator != 'function') {
            this.comparator = function comparator(inserted, compared) {
                return inserted < compared;
            };
        } else {
            this.comparator = comparator;
        }

        this.init();
    }

    init() {
        const size = this.size();
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(this.list, size, i);
        }
    }

    insert(n) {
        this.list.push(n);
        const size = this.size();
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(this.list, size, i);
        }
    }

    peek() {
        return this.list[0];
    }

    pop() {
        const last = this.list.pop();
        if (this.size() === 0) return last;
        const returnItem = this.list[0];  // 移除最大值  第一个
        this.list[0] = last;  // 第一个值为
        this.heapify(this.list, this.size(), 0); // 构建一次
        return returnItem;
    }

    size() {
        return this.list.length;
    }
}

class MaxHeap extends Heap {
    constructor(list, comparator) {
        super(list, comparator);
    }

    heapify(arr, size, i) {
        let largest = i;
        const left = Math.floor(i * 2 + 1);
        const right = Math.floor(i * 2 + 2);

        if (left < size && this.comparator(arr[largest], arr[left]))
            largest = left;
        if (right < size && this.comparator(arr[largest], arr[right]))
            largest = right;

        if (largest !== i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            this.heapify(arr, size, largest);
        }
    }
}


// 堆排序的构建
var topKFrequent = function(nums, k) {
    const map = {}
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else {
            map[nums[i]] ++;
        }
    }

    // [ [ '1', 3 ], [ '2', 2 ], [ '3', 1 ] ]
     // 入堆，格式是：[数字，次数]，按次数排序
    const maxHeap = new MaxHeap(Object.entries(map), function comparator(
        inserted,
        compared,
    ) {
        return inserted[1] < compared[1];
    });
    // 输出前 k 个
    const res = [];
    while (k-- > 0) {
        res.push(maxHeap.pop()[0]);
    }
    return res;
};