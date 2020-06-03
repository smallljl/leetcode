/*
 * @Author: your name
 * @Date: 2020-04-29 09:11:29
 * @LastEditTime: 2020-04-29 09:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_03\test.js
 */
var test = function(level,n,s){
    if(level >= n){
        return;
    }
    test(level+1,n,s+"(");
    test(level+1,n,s+")");
}

test(0,2,"");