export default (arr)=>{
    var vetor = arr.length;
    for(let i=0,len=vetor/2;i<len;i++){
        for(let j =0,tmp; j<vetor;j++){
            tmp = arr[i][j];
            arr[i][j] = arr[vetor-i-1][j];
            arr[vetor-i-1][j] = tmp;
        }
    }

    //简写对角线翻转
    for(let i =0;i<vetor;i++){
        for(let j=0,tmp;j<i;j++){
            tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        }
    }
    return arr;
}