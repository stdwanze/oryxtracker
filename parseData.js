const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const parser = new XMLParser();
function parse(html){

//"<span style="color: red;">Russia - 1308, of which: destroyed: 554, damaged: 19, abandoned: 207, captured: 528<br></span>
    let regex = /(span style=\"color: red;\">)([Russia|Ukraine].*)(<b)/g;
    let found = html.match(regex);


 found = found.map((s)=> s.replace("span style=\"color: red;\">", ""));
 found = found.map((s)=> s.replace("</span><span style=\"color: red;\">",""));
 found = found.map((s)=> s.replace("<b",""));

    return found;
}


module.exports = {
    parse
}