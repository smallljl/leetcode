/*
 * @Author: your name0
 * @Date: 2020-05-09 09:38:31
 * @LastEditTime: 2020-05-10 13:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_04\二分查找模板.js
 */
let arr = [1,5,6,10,14,18,24,29,35,38,48,54,80];
function binarySearch(array,target){
   let left = 0;
   let right = array.length - 1;
   while(left <= right){
       let mid = ~~(left + (right-left) >> 1);
       if(array[mid] === target){
           return true;
       }else if(array[mid] < target){
           left = mid+1;
       }else if(array[mid] > target){
           right = mid-1;
       }
   }
   return -1;
}

function binarySear(arr,target){
    function binarySea(left,right,target){
        if(left <= right){
            let mid = ~~((left+right)>>1);
            if(arr[mid] === target){
                return true;
            }else if(arr[mid] < target){
                // 中间小于目标值
                return binarySea(mid+1,right,target);
            } else if(arr[mid] > target){
                // 中间大于目标值
                return binarySea(left,mid-1,target);
            }
        }
        return -1;
    }   
    return binarySea(0,arr.length-1,target); 
}
console.log(binarySear(arr,18));