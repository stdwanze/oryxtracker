
const fs = require('fs')
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



module.exports = {
    writeToFile,
    savelast
}