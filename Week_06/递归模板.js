/*
 * @Author: your name
 * @Date: 2020-05-30 19:38:17
 * @LastEditTime: 2020-05-31 13:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_06\递归模板.js
 */ 
const recursion = (level, params) =>{
    // recursion terminator
    if(level > MAX_LEVEL){
      process_result
      return 
    }
    // process current level
    process(level, params)
    //drill down
    recursion(level+1, params)
    //clean current level status if needed
    
 }     