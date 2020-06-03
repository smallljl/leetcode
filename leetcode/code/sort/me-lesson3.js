// export default (arr)=>{
//     if(arr.length < 2){
//         return 0;
//     }
//     arr.sort((a,b)=>a-b);
//     let max = 0;
//     for(let i=0,len=arr.length-1,tmp;i<len;i++){
//         tmp = arr[i+1] - arr[i];
//         if(tmp > max){
//             max = tmp;
//         }
//     }
//     return max;
// }

export default (arr)=>{
    if(arr.length<2){ return 0};
    let len = arr.length-1;
    let max = 0;
    let space;
    for(let i=len,tmp;i>0;i--){
        for(let j=0;j<i;j++){
            tmp = arr[j];
            if(tmp>arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
        if(i<len){
            space = arr[i+1] - arr[i];
            if(max < space){
                max = space;
            }
        }
    }
    console.log(max);
    return Math.max(max, arr[1] - arr[0]);
}