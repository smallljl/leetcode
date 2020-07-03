// 创建一个链表节点
// value表示数据
function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(5);
var node2 = new Node(3);
var node3 = new Node(7);
node1.next = node2;
node2.next = node3;

// 遍历打印链表
// root表示链表的根节点
function print(root) {
  // 分治法
  if (root) {
    // 如果要打印的节点有值
    console.log(root.value); // 打印节点
    print(root.next); // 打印下一个节点
  }
}

// 获取链表的长度
function getLength(root) {
  if (!root) {
    return 0;
  }
  return 1 + getLength(root.next);
}

// 通过下标获取链表中的某个数据
// 找不到返回false
function getValue(root, index) {
  // 判断给定的node 和 对应的下标, 是不是满足要求
  function _getValue(node, curIndex) {
    if (curIndex === index) {
      return node;
    }
    if (!node) {
      //已经超出了链表范围
      return false;
    }
    return _getValue(node.next, curIndex + 1);
  }

  return _getValue(root, 0);
}

// 通过下标设置链表中的某个数据
function setValue(root, index, value) {
  function _setValue(node, curIndex) {
    if (!node) {
      //节点不存在,无法设置
      return;
    }
    if (curIndex === index) {
      node.value = value;
    } else {
      _setValue(node.next, curIndex + 1);
    }
  }
  _setValue(root, 0);
}

// 在链表指定下标的位置加入新节点
function insert(root, index, newValue) {
  function _insert(node, curIndex) {
    if (!node) {
      return false;
    }
    if (curIndex === index - 1) {
      var newNode = new Node(newValue);
      newNode.next = node.next;
      node.next = newNode;
    } else {
      _insert(node.next, curIndex + 1);
    }
  }

  _insert(root, 0);
}

// 在链表末尾加入一个新节点
function append(root, newValue) {
  // 自行完成
  if (!root) {
    return;
  }
  if (!root.next) {
    //当前节点就是最后一个节点
    var node = new Node(newValue);
    root.next = node;
  } else {
    append(root.next, newValue);
  }
}

// 删除一个链表节点
function remove(root, index) {
  function _remove(node, curIndex) {
    if (!node || !node.next) {
      return; //没法删了
    }
    if (curIndex === index - 1) {
      node.next = node.next.next;
    } else {
      _remove(node.next, curIndex + 1);
    }
  }
  _remove(root, 0);
}

// 链表倒序
function reverse(root) {
  if (!root || !root.next) {
    // 没有节点,或者只有一个节点
    return root;
  }
  if (!root.next.next) {
    // 两个节点
    var temp = root.next;
    temp.next = root;
    root.next = null;
    return temp;
  } else {
    // 大于两个节点
    var temp = reverse(root.next);
    root.next.next = root;
    root.next = null;
    return temp;
  }
}

//删除链表第一个节点
function unShift(root) {
  if (!root) {
    return null;
  }
  return root.next;
}

// var result = reverse(node1);
// console.log(result);

append(node1, 100);
print(node1);