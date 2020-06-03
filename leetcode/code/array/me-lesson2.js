export default (arr)=>{
    let gcd = (a,b)=>{
        if(b === 0){
            return a;
        }else{
            return gcd(b,a%b);
        }
    }
    let tmp = {};
    let group = [];
    arr.forEach(item=>{
        tmp[item] = tmp[item] ? tmp[item]+1:1
    })
    for(let v of Object.values(tmp)){
        group.push(v);
    }
    while(group.length > 1){
        let a = group.shift();
        let b = group.shift();
        let v = gcd(a,b);
        if(v === 1){
            return false;
        }
        group.unshift(v);
    }
    return group.length ? group[0] > 1 : false;
}