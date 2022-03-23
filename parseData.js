const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const parser = new XMLParser();
function parseBasic(html){

//"<span style="color: red;">Russia - 1308, of which: destroyed: 554, damaged: 19, abandoned: 207, captured: 528<br></span>
    let regex = /(span style=\"color: red;\">)([Russia|Ukraine].*)(<b)/g;
    let found = html.match(regex);


 found = found.map((s)=> s.replace("span style=\"color: red;\">", ""));
 found = found.map((s)=> s.replace("</span><span style=\"color: red;\">",""));
 found = found.map((s)=> s.replace("<b",""));

    return found;
}
function parseAdvanced(found){
    //Russia - 1663, of which: destroyed: 800, damaged: 31, abandoned: 221, captured: 611
    //Ukraine - 500, of which: destroyed: 185, damaged: 10, abandoned: 37, captured: 268
    let parsed = [];
    parsed.push(matchLine(found[0]));
    parsed.push(matchLine(found[1]));
    return parsed;
}

function matchLine(line){
    let regex = /(^[a-zA-Z]*)\s\-\s(\d*).*(destroyed)\:\s(\d*).*(damaged)\:\s(\d*).*(abandoned)\:\s(\d*).*(captured)\:\s(\d*)/;

    let ret = { country: "", total:-1 };
    let m = line.match(regex);

    ret.country = m[1];
    ret.total = m[2];

    for( let i = 3; i < m.length; i+= 2){
        ret[m[i]] = m[i+1];
    }

    return ret;
}



module.exports = {
    parseBasic,
    parseAdvanced
}