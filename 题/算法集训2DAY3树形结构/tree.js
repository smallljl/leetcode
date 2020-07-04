/**
 * 普通的树表示法
 */
// function Node(value) {
//   this.value = value;
//   this.children = [];
// }

/**
 * 二叉树
 * @param {*} value
 */
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 * 前序遍历
 * @param {*} root
 */
function DLR(root) {
  //输出自己
  if (!root) {
    return;
  }
  console.log(root.value);
  //输出左边
  DLR(root.left);
  //输出右边
  DLR(root.right);
}

/**
 * 中序遍历
 * @param {*} root
 */
function LDR(root) {
  if (!root) {
    return;
  }
  //输出左边
  LDR(root.left);
  //输出自己
  console.log(root.value);
  //输出右边
  LDR(root.right);
}

/**
 * 后续遍历
 * @param {*} root
 */
function LRD(root) {
  if (!root) {
    return;
  }
  // 输出左边
  LRD(root.left);
  // 输出右边
  LRD(root.right);
  // 输出自己
  console.log(root.value);
}

/**
 * 根据前序遍历和中序遍历的结果，得到一颗二叉树
 * @param {Array} dlr 数组
 * @param {Array} ldr 数组
 */
function getTree(dlr, ldr) {
  //严谨性判断
  if (dlr.length !== ldr.length) {
    throw new Error("无解");
  }
  if (dlr.length === 0) {
    return null;
  }
  // 正常逻辑
  var rootValue = dlr[0]; //前序遍历的第一个就是根，得到根的值
  var root = new Node(rootValue); //创建根节点

  //加左节点
  var index = ldr.indexOf(rootValue); //根节点在中序遍历中的索引
  var leftLDR = ldr.slice(0, index); //左边的中序遍历结果
  var leftDLR = dlr.slice(1, 1 + leftLDR.length); //左边的前序遍历结果
  root.left = getTree(leftDLR, leftLDR);

  //加右节点
  var rightLDR = ldr.slice(index + 1); //右边的中序遍历结果
  var rightDLR = dlr.slice(1 + leftLDR.length);

  root.right = getTree(rightDLR, rightLDR);

  return root;
}

/**
 * 得到树的深度
 * @param {*} root
 */
function getDepth(root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
}

/**
 * target在树中是否存在
 * @param {*} root
 * @param {*} target
 */
function searchDeep(root, target) {
  if (!root) {
    return false;
  }
  console.log(root.value);
  //先看自己
  if (root.value === target) {
    return true; //找到了
  }
  // 左边或右边任何一个找到，都行
  return searchDeep(root.left, target) || searchDeep(root.right, target);
}

/**
 * 广度优先搜索
 * @param {*} root
 * @param {*} target
 */
function searchWide(root, target) {
  if (!root) {
    return false;
  }
  /**
   * 辅助函数
   * @param {*} layer 要搜索的节点数组
   */
  function _searchWide(layer) {
    if (layer.length === 0) {
      return false; //这一层没有东西了
    }
    console.log(layer);
    var nextLayer = []; //下一层的数组
    for (var i = 0; i < layer.length; i++) {
      if (layer[i].value === target) {
        return true;
      } else {
        if (layer[i].left) {
          nextLayer.push(layer[i].left);
        }
        if (layer[i].right) {
          nextLayer.push(layer[i].right);
        }
      }
    }

    //说明这一层没有希望
    return _searchWide(nextLayer);
  }
  return _searchWide([root]);
}

/**
 * 得到两颗树的差异
 * [
 *    {type: "修改", from: B, to: T},
 *    {type: "删除", from: D, to: null},
 *    {type: "新增", from: null, to: F},
 * ]
 * @param {*} root1
 * @param {*} root2
 */
function diff(root1, root2) {
  var result = []; //保存差异结果的数组
  if (!root1 && !root2) {
    //两棵树都没有节点
    return result;
  }
  if (!root1 && root2) {
    //左边没有，右边有
    result.push({
      type: "新增",
      from: root1,
      to: root2
    });
  } else if (root1 && !root2) {
    //左边有，右边没有
    result.push({
      type: "删除",
      from: root1,
      to: root2
    });
  } else if (root1.value !== root2.value) {
    //两边的值不一样
    result.push({
      type: "修改",
      from: root1,
      to: root2
    });
    //比较后续
    var resultLeft = diff(root1.left, root2.left); //左边的差异
    var resultRight = diff(root1.right, root2.right); //右边差异
    result = result.concat(resultLeft);
    result = result.concat(resultRight);
  } else {
    //两边一样
    //比较后续
    var resultLeft = diff(root1.left, root2.left); //左边的差异
    var resultRight = diff(root1.right, root2.right); //右边差异
    result = result.concat(resultLeft);
    result = result.concat(resultRight);
  }

  return result;
}

var root1 = getTree(["A", "B", "D", "C", "E"], ["D", "B", "C", "A", "E"]);
var root2 = getTree(["A", "T", "C", "E", "F"], ["T", "C", "A", "F", "E"]);

console.log(root1, root2);

console.log(diff(root1, root2));

// console.log(root);

// console.log(getDepth(root));
// var A = new Node("A");
// var B = new Node("B");
// var C = new Node("C");
// var D = new Node("D");
// var E = new Node("E");
// A.left = B;
// A.right = E;
// B.left = D;
// B.right = C;
// LRD(A);
