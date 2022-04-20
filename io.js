
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);


function writeToFile(formatted){
    fs.appendFile('lost.txt', formatted, function (err) {
        if (err) throw err;
      });
}
function savelast(found){
    fs.writeFile('last.json',JSON.stringify(found), function (err) {
        if (err) throw err;
      });
}
async function load(){
    let data = await readFile('lost.txt','utf-8');
    return data;
}


module.exports = {
    writeToFile,
    savelast,
    load
}