export default (str)=>{
    let reg = /^(\w+)\1+$/;
    return reg.test(str);
}