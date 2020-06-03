/*
 * @Author: your name
 * @Date: 2020-04-24 23:07:26
 * @LastEditTime: 2020-04-24 23:07:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_02\589. N叉树的前序遍历.js
 */
/**
 * 
 * 给定一个 N 叉树，返回其节点值的前序遍历。
   例如，给定一个 3叉树 :
   返回其前序遍历: [1,3,5,6,2,4]。
 * 
 */
var preorder = function(root) {
    function _preorder(node,hander){
       if(!node) return false;
       hander(node.val);
       let childs = node.children; 
       if(childs.length){
           for(let i = 0; i < childs.length;i++){
               let item = childs[i];
               _preorder(item,hander);
           }
       }
       
   }
   let arr = [];
   function hander(val){
       arr.push(val);
   }
   _preorder(root,hander);
   return arr;
};
