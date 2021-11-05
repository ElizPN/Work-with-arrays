
function camelize(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ( str[i - 1] === '-') {    
            newStr = newStr + str[i].toUpperCase()
        } else {
            newStr = newStr + str[i] 
        }   
    } 
    console.log(newStr)
    resultStr = newStr.replace(/-/g,'');
    
   return resultStr;
} 

console.log(camelize('my-short-string'));