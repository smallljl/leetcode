function BinarySearchTree(){
	
	function Node(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}
	
	this.root = null;

	BinarySearchTree.prototype.insert = function(key){
		var newNode = new Node(key);
		if(this.root == null){
			this.root = newNode;
		} else {
			this.insertNode(this.root,newNode);
		}
	};
	
	BinarySearchTree.prototype.insertNode = function(node,newNode){
		if(newNode.key < node.key){
			if(node.left == null){
				node.left = newNode;
			} else {
				this.insertNode(node.left,newNode);
			}
		} else {
			if(node.right == null){
				node.right = newNode;
			} else {
				this.insertNode(node.right,newNode);
			}
		}
	};
	
	BinarySearchTree.prototype.preOrderTraverse = function(hander){
		this.preOrderTraverseNode(this.root,hander);
	};
	
	BinarySearchTree.prototype.preOrderTraverseNode= function(node,hander){
		if(node != null){
			hander(node.key);
			this.preOrderTraverseNode(node.left,hander);
			this.preOrderTraverseNode(node.right,hander);
		}
	};
	
	BinarySearchTree.prototype.midOrderTraverse = function(hander){
		this.midOrderTraverseNode(this.root,hander);
	};
	
	BinarySearchTree.prototype.midOrderTraverseNode = function(node,hander){
		if(node != null){
			this.midOrderTraverseNode(node.left,hander);
			hander(node.key);
			this.midOrderTraverseNode(node.right,hander);
		}
	};
	
	BinarySearchTree.prototype.postOrderTraverse = function(hander){
		this.postOrderTraverseNode(this.root,hander);
	};
	
	BinarySearchTree.prototype.postOrderTraverseNode = function(node,hander){
		if(node != null){
			this.postOrderTraverseNode(node.left,hander);
			this.postOrderTraverseNode(node.right,hander);
			hander(node.key);
		}
	};
	
	BinarySearchTree.prototype.max = function(){
		var node = this.root;
		var key = null;
		while(node != null){
			key = node.key;
			node = node.right;
		}
		return key;
	};
	
	BinarySearchTree.prototype.min = function() {
		var node = this.root;
		var key = null;
		while (node != null) {
			key = node.key;
			node = node.left;
		}
		return key;
	};
	
	BinarySearchTree.prototype.search = function(key){
		if(key === null) return;

		var node = this.root;
		while(node != null){
			if(key < node.key){
				node = node.left;
			} else if( key > node.key){
				node = node.right;
			} else {
				return true;
			}
		}
		return false;
	};
	
	BinarySearchTree.prototype.remove = function(key){
		var current = this.root;
		var isLeftChild = true;
		var parent = null;

		while(current.key !== key){
			parent = current;
			if(key < current.key){
				isLeftChild = true;
				current = current.left;
			} else {
				isLeftChild = false;
				current = current.right;
			}

			if(current == null){
				return false;
			}
		}
		if(current.left == null && current.right == null){
			if(current === this.root){
				this.root = null;
			} else if(isLeftChild){
				parent.left = null;
			} else {
				parent.right = null;
			}
		}

		else if(current.right == null){
			if(current === this.root){
				this.root = current.left;
			} else if(isLeftChild){
				parent.left = current.left;
			} else {
				parent.right = current.left;
			}
		} else if(current.left == null){
			if(current === this.root){
				this.root = current.right;
			} else if(isLeftChild){
				parent.left = current.right;
			} else {
				parent.right = current.right;
			}
		} else {
			var succssor = this.getSuccessor(current);
			if(current === this.root){
				this.root = succssor;
			} else if(isLeftChild){
				parent.left = succssor;
			} else {
				parent.right = succssor;
			}
			succssor.left = current.left;
		}
		return true;
	};

	BinarySearchTree.prototype.getSuccessor = function(delNode){
		var sucessor = delNode;
		var current = delNode.right;
		var succssorParent = delNode;

		while(current !== null){
			succssorParent = sucessor;
			sucessor = current;
			current = current.left;
		}

		if(sucessor !== delNode.right){
			succssorParent.left = sucessor.right;
			sucessor.right = delNode.right;
		}
		return sucessor;
	}
}


// /*
//  * @Author: junjie
//  * @Date: 2020-01-04 16:34:26
//  * @LastEditTime : 2020-01-12 14:54:17
//  * @LastEditors  : Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \test\tree.js

// /**
//  * @description: 二叉搜索树 
//  * @param {type} 
//  * @return: 
//  */
// function BinarySearchTree(){
//     function Node(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
//     this.root = null;

//     BinarySearchTree.prototype.insert = function(key){
//         var newNode = new Node(key);
//         if(this.root == null){
//             this.root = newNode;
//         }else{
//             this.insertNode(this.root,newNode);
//         }
//     }

//     BinarySearchTree.prototype.insertNode = function(node,newNode){
//         if(newNode.data > node.data){
//             if(node.right == null){
//                 node.right = newNode;
//             }else{
//                 this.insertNode(node.right,newNode);
//             }
//         }else{
//             if(node.left == null){
//                 node.left = newNode;
//             }else{
//                 this.insertNode(node.left,newNode);
//             }
//         }
//     }

//     /**
//      * @description: 先序遍历
//      * @param {type} 
//      * @return: 
//      */
//     BinarySearchTree.prototype.preOrderTraverse = function(hander){
//         this.preOrderTraverseNode(this.root,hander)
//     }

//     BinarySearchTree.prototype.preOrderTraverseNode = function(node,hander){
//         if(node == null) return;
//         hander(node.data);
//         this.preOrderTraverseNode(node.left,hander);
//         this.preOrderTraverseNode(node.right,hander);
//     }

//     /**
//      * @description: 中序遍历
//      * @param {type} 
//      * @return: 
//      */
//     BinarySearchTree.prototype.inOrderTraverse = function(hander){
//         this.inOrderTraverseNode(this.root,hander)
//     }

//     BinarySearchTree.prototype.inOrderTraverseNode = function(node,hander){
//         if(node == null) return;
//         this.preOrderTraverseNode(node.left,hander);
//         hander(node.data)
//         this.preOrderTraverseNode(node.right,hander);
//     }

//     /**
//      * @description: 后序遍历
//      * @param {type} 
//      * @return: 
//      */    
//     BinarySearchTree.prototype.postOrderTraverse = function(hander){
//         this.postOrderTraverseNode(this.root,hander)
//     }

//     BinarySearchTree.prototype.postOrderTraverseNode = function(node,hander){
//         if(node == null) return;
//         this.postOrderTraverseNode(node.left,hander);
//         this.postOrderTraverseNode(node.right,hander);
//         hander(node.data)
//     }

//     BinarySearchTree.prototype.min = function(){
//         var node = this.root;
//         var key = null;
//         while(node.left !== null){
//             key = node.data;
//             node = node.left;
//         }
//         return key;
//     }

//     BinarySearchTree.prototype.max = function(){
//         var node = this.root;
//         var key = null;
//         while(node.right !== null){
//             key = node.data;
//             node = node.right;
//         }
//         return key;
//     }

//     BinarySearchTree.prototype.search = function(key){
//         return this.searchNode(this.root,key);
//     }

//     BinarySearchTree.prototype.searchNode = function(node,key){
//         while(node != null){
//             if(key < node.data){
//                 node = node.left;
//             } else if(key > node.data){
//                 node = node.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }

//     BinarySearchTree.prototype.remove = function(key){
//         this.removeNode(this.root,key)
//     }

//     BinarySearchTree.prototype.removeNode = function(node,key){
//         var current = this.root;
//         var parent  =null;
//         var isLeftChild = true;

//         while(current.data != key){
//             parent = current;
//             if(key < current.data){
//                 isLeftChild = true;
//                 current = current.left;
//             }else{
//                 isLeftChild = false;
//                 current = current.right;
//             }

//             if(current == null) return false;
//         }

//         //  根据对应的情况删除节点

//         //  1.删除的节点是叶子节点 
//         if(current.left == null && current.right == null){
//             if(current == this.root){
//                 this.root = null;
//             }else if(isLeftChild){
//                 parent.left = null;
//             }else{
//                 parent.right = null;
//             }
//         }

//         // 2.删除的节点只有一个子节点
//         else if(current.right == null){
//             if(current == this.root){
//                 this.root = current.left;
//             } else if(isLeftChild){
//                 parent.left = current.left;
//             } else {
//                 parent.right = current.left;
//             }
//         } else if(current.left == null){
//             if(current == this.root){
//                 this.root = current.right;
//             } else if(isLeftChild){
//                 parent.left = current.right;
//             } else {
//                 parent.right = current.right;
//             }
//         }

//         // 2.3删除的节点有两个子节点
//         else {
//            // 1.获取后继节点
//            var succssor = this.getSuccssor(current);
//            // 2.判断是否是根节点
//            if(current == this.root){
//                this.root = succssor;
//            } else if(isLeftChild){
//                parent.left = succssor;
//            } else {
//                parent.right = succssor;
//            }

//            // 3.将删除节点的左子树 = current.left;
//            succssor.left = current.left;
//         }
//     }

//     BinarySearchTree.prototype.getSuccssor = function(delNode){
//         // 定义变量，保存找到的后继
//         var succssor = delNode;
//         var current = delNode.right;
//         var succssorParent = delNode;
//         // 2. 循环查找
//         while(current!= null){
//             succssorParent = succssor;
//             succssor = current;
//             current = current.left;
//         }

//         // 3.判断寻找到的后继节点是否直接就是delNode的right节点
//         if(succssor != delNode.right){
//             succssorParent.left = succssor.right;
//             succssor.right = delNode.right;
//         }

//         return succssor;
//     }
// }
