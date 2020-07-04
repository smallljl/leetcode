function kmp (s,p){
  let m = s.length;  // acsdasda  // sasa
  let n = p.length;   
  for(let i = 0; i <= m-n;i++){
    let j; 
    for(j = 0; j < n;j++){
      if(s[i+j] !== p[j])  break;
    }
    if(j === n){
      return i;
    }
  }
  return -1;
}