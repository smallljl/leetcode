// 顺序查找
function inorderSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
var num = 0; //测试查找的次数

function binarySearch(arr, target) {
  function _binarySearch(left, right) {
    num++;
    if (left === right) {
      return arr[left] === target;
    }
    if (left > right || left < 0 || right > arr.length - 1) {
      return false;
    }
    var mid = Math.floor((left + right) / 2); //得到中间的下标
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      //在左边继续寻找
      return _binarySearch(left, mid - 1);
    } else {
      //在右边继续寻找
      return _binarySearch(mid + 1, right);
    }
  }

  return _binarySearch(0, arr.length - 1);
}

//插值查找
function interpolationSearch(arr, target) {
  function _interpolationSearch(left, right) {
    num++;
    if (left === right) {
      return arr[left] === target;
    }
    if (left > right || left < 0 || right > arr.length - 1) {
      return false;
    }
    var mid = Math.floor(
      ((target - arr[left]) / (arr[right] - arr[left])) * (right - left) + left
    );
    console.log(mid);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      //在左边继续寻找
      return _interpolationSearch(left, mid - 1);
    } else {
      //在右边继续寻找
      return _interpolationSearch(mid + 1, right);
    }
  }

  return _interpolationSearch(0, arr.length - 1);
}

var arr = [];
for (var i = 1; i <= 100; i++) {
  arr.push(i + Math.floor(Math.random() * 2));
}

console.log(interpolationSearch(arr, 11), "找了" + num + "次");
