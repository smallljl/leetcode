/**
 * 编写一段程序来查找第 n 个超级丑数。

 超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。

 示例:
 判断正整数的质因数是否在列表中
 输入: n = 12, primes = [2,7,13,19]
 输出: 32
 解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
 说明:

 1 是任何给定 primes 的超级丑数。
  给定 primes 中的数字以升序排列。
  0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000 。
 第 n 个超级丑数确保在 32 位有符整数范围内。
 */

class Ugly {
  constructor (n, primes) {
    this.n = n;
    // this.primes = primes;
    this.primes = new Heap(primes);  // 7ms
  }
  getAll () {
    // 超级丑数列表
    let res = [1];
    let i = 2;
    let primes = this.primes;
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i);  // 该数的质因数列表
      let k = 0;
      let l = arr.length;
      for (;k < l; k++) {

        //ES6的find
        // if(!primes.find(item => item === arr[k])){
        //   break;
        // }

        if (!primes.find(arr[k])) {
          break
        }
      }
      // k===l有两种情况，一种就是当前这个数压根没有质因数,证明这个数是质数；一种是所有质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          // find()方法主要用来返回数组中符合条件的第一个元素（没有的话，返回undefined）

          // ES6的find   16ms
          // if(primes.find(item=>item===i)){
          //   res.push(i);
          // }

          if (primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  // 计算指定正整数n的质因数   约数并且是质数
  static getPrimes (n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = [];
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    };
    return prime(n)
  }
}

class Heap {
  constructor (arr) {
    this.data = arr;
    this.max = arr.length;
    this.sort()
  }
  sort () {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      return iArr
    }
  }
  find (val, i = 0) {
    let arr = this.data;
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
  // 交换两个元素
  static swap (arr, a, b) {
    if (a === b) {
      return
    }
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c
  }
  // 构建最大堆的过程
  static maxHeapify (Arr, i, size) {
    // 左节点（索引）
    let l = i * 2 + 1;
    // 右节点
    let r = i * 2 + 2;
    let largest = i;
    // 父节点i和左节点l做比较取最大
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    // 右节点和最大值比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest);
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}

export default Ugly
export {
  Heap
}
