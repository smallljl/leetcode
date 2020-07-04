/**
 * 交换数组指定的两个位置的数据
 * @param {*} arr
 * @param {*} i1
 * @param {*} i2
 */
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    // 循环了 arr.length - 1 次
    // 内部循环范围：0 ~ length - i - 2，相邻比较
    for (var j = 0; j <= arr.length - i - 2; j++) {
      // 比较 j 和 j+1 两个位置
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

// 插入排序
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      // 搞定 i ~ 0
      var temp = arr[i];
      for (var j = i; j >= 0; j--) {
        if (j > 0 && temp < arr[j - 1]) {
          // j前面有东西，并且比temp大
          arr[j] = arr[j - 1];
        } else {
          break;
        }
      }
      arr[j] = temp;
    }
  }
}

// 快速排序
function quickSort(arr) {
  // 对数组中指定的范围进行排序
  function _quickSort(left, right) {
    if (left < 0 || right > arr.length - 1 || left >= right) {
      return;
    }
    // 拿一个基准数
    var key = arr[right];
    var low = left,
      high = right;
    while (low < high) {
      while (arr[low] < key && low < high) {
        low++;
      }
      //低位的已经无法移动了
      arr[high] = arr[low];
      while (arr[high] >= key && low < high) {
        high--;
      }
      //高位的已经无法移动
      arr[low] = arr[high];
    }
    //保证循环结束后，low === high
    arr[low] = key;
    //搞定左边
    _quickSort(left, low - 1);
    //搞定右边
    _quickSort(low + 1, right);
  }

  _quickSort(0, arr.length - 1); //一开始，在0~最大下标之间进行排序
}

// var arr = [5, 3, 1, 33, 22, 6, 4];
// quickSort(arr);
// console.log(arr);
