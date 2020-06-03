export default (arr)=>{
    // 选择排序
    for(let i =0,len = arr.length,min; i < len;i++){
        min = arr[i];
        for(let j = i+1;j<len;j++){
            if(min > arr[j]){
                let c = min;
                min = arr[j];
                arr[j] = c;
            }    
        }
        arr[i] = min;
    }
    return arr;
}