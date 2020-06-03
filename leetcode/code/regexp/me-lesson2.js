export default (s,p) => {
    let isMatch = (s,p)=>{
        if(p.length <= 0){
            return !s.length;
        }
        let match = false;
        if( s.length > 0 &&(p[0] === s[0] || p[0] === '.')){
            match = true; 
        }
        if(p.length > 0 && p[1] === '*'){
            return isMatch(s,p.slice(2)) || (match && isMatch(s.slice(1),p));
        }else{
            return match && isMatch(s.slice(1),p.slice(1));
        }
    }
    return isMatch(s,p);
}