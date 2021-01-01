/**
 *  有一堆石头，每块石头的重量都是正整数。

    每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

    如果 x == y，那么两块石头都会被完全粉碎；
    如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
    最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

     

    示例：

    输入：[2,7,4,1,8,1]
    输出：1
    解释：
    先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
    再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
    接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
    最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。

 * 
 * 
 */


 /** 大顶堆
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap(stones);
    while(heap.size() > 1){
        const first = heap.pop();
        const second = heap.pop();
        if(first > second) heap.insert(first - second);
   }
   return heap.size() ? heap.pop() : 0;
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