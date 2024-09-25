function collectStrings(obj) {
    var stringsArr = [];
  
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
  
    gatherStrings(obj);
  
    return stringsArr;
}