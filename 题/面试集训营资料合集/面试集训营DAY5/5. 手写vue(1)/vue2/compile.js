/**
 * 姓名：{{name}}, 年龄：{{age}}，居住省份：{{addr.province}}
   返回：  ["{{name}}", "{{age}}", "{{addr.province}}"]
 * @param {*} template 
 */
function getFragments(template){
    var matches = template.match(/{{[^}]}}/g);
    return matches || [];
}

/**
 * 
 * @param {模板} template 
 * @param {*} envObj 
 */
export default function compile(template,envObj){
    var frags = getFragments(template);
    var result = template;
    for(var i = 0; i < frags.length; i++){
        var frag = frags[i];
        result = result.replace(frag,getValue(frag,envObj))
    }
}