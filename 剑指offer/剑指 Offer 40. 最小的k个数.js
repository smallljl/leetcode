/**
 *  输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

    示例 1：

    输入：arr = [3,2,1], k = 2
    输出：[1,2] 或者 [2,1]
    示例 2：

    输入：arr = [0,1,2,1], k = 1
    输出：[0]

 * 
 * 
 */

 /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    const maxHeap = new MaxHeap(arr,function comparator(inserted,compared){
        return inserted > compared;
    });
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(maxHeap.pop());
    }
    return res;
};



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
