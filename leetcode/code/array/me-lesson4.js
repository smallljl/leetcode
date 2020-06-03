// export default (n)=>{
//     let make = (n)=>{
//         if(n === 1){
//             return ['0','1'];
//         }else {
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             let result = [];
//             for(let i = 0,len=prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }

//     let byte2to10 = (arr)=>{
//         let result = [];
//         for(let i = 0,len = arr.length,tmp,sum;i<len;i++){
//             tmp = arr[i].split("");
//             sum = 0;
//             for(let j = 0,jl = tmp.length-1;j<=jl;j++){
//                 sum += parseInt(tmp[jl-j]) * Math.pow(2,j);
//             }
//             result.push(sum);
//         }
//         return result;
//     }

//     return byte2to10(make(n));
// }


// export default(n)=>{
//     let make = (n) => {
//         if(n === 1){
//             return ["0","1"];
//         } else {
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             let result = [];
//             for(let i = 0,len = prev.length; i< len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             } 
//             return result;
//         }
//     }

//     let byte2to10 = (arr)=>{
//         console.log(arr);
//         let result = [];
//         for(let i = 0,len = arr.length-1,sum,tmp;i<=len;i++){
//             tmp = arr[i].split("");
//             sum = 0;
//             for(let j = 0,jl=tmp.length-1;j<=jl;j++){
//                 sum += parseInt(tmp[jl-j]) * Math.pow(2,j);
//             }
//             result.push(sum);
//         }
//         return result;
//     }

//     return byte2to10(make(n));
//   }

// export default (n)=>{
//     let make = (n) => {
//         if(n === 1){
//             return ['0','1'];
//         }else {
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             let result = [];
//             for(let i = 0,len = prev.length;i<len;i++){
//                 result[max-i] = `1${prev[i]}`;
//                 result[i] = `0${prev[i]}`;
//             }
//             return result;
//         }
//     }

//     let byte2to10 = (arr)=>{
//         let result = [];
//         for(let i = 0,len = arr.length,tmp,sum;i<len;i++){
//             sum = 0;
//             tmp = arr[i].split("");
//             for(let j = 0,jl=tmp.length-1;j<=jl;j++){
//                 sum += parseInt(tmp[jl-j]) * Math.pow(2,j); 
//             }
//             result.push(sum);
//         }
//         return result;
//     }

//     return byte2to10(make(n));
// } 

// export default (n)=>{
//     let make = (n) =>{
//         if(n === 1){
//             return ['0','1'];
//         } else {
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             let result = [];
//             for(let i = 0,len = prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

// export default (n)=>{
//     let make = (n)=>{
//         if( n=== 1){
//             return ['0','1'];
//         }else{
//             let prev = make(n-1);
//             let result = [];
//             let max = Math.pow(2,n)-1;
//             for(let i=0,len = prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

// export default (n)=>{
//     let make = (n) => {
//         if(n===1){
//             return ['0','1'];
//         }else{
//             let prev = make(n-1);
//             let result = [];
//             let max = Math.pow(2,n)-1;
//             for(let i = 0,len = prev.length;i<len;i++){
//                 result[i]=`0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

// export default (n)=>{
//     let make = (n) => {
//         if(n === 1){
//             return ['0','1'];
//         }else{
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             let result = [];
//             for(let i = 0,len = prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

// export default (n)=>{
//     let make = (n)=>{
//         if(n===1){
//             return ['0','1'];
//         }else{
//             let result = [];
//             let prev = make(n-1);
//             let max = Math.pow(2,n)-1;
//             for(let i = 0,len=prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

// export default (n)=>{
//     let make = (n)=>{
//         if(n === 1){
//             return ['0','1'];
//         }else{
//             let prev = make(n-1);
//             let result = [];
//             let max = Math.pow(2,n)-1;
//             for(let i = 0,len = prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] = `1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }


// export default (n)=>{
//     let make = (n) =>{
//         if(n === 1){
//             return ['0','1'];
//         }else{
//             let result = [];
//             let max = Math.pow(2,n)-1;
//             let prev = make(n-1);
//             for(let i=0,len = prev.length;i<len;i++){
//                 result[i] = `0${prev[i]}`;
//                 result[max-i] =`1${prev[i]}`;
//             }
//             return result;
//         }
//     }
//     return make(n);
// }

export default (n) => {
    let make = (n) => {
        if(n === 1){
            return ['0','1'];
        }else{
            let prev = make(n-1);
            let result = [];
            let max = Math.pow(2,n)-1;
            for(let i = 0,len = prev.length;i<len;i++){
                result[i] = `0${prev[i]}`;
                result[max-i] = `1${prev[i]}`;
            }
            return result;
        }
       
    }
    return make(n);
}