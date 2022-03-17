const loader = require('./getData');
const parser = require('./parseData');
const fs = require('fs')
const f = require('./format');



loader.loadoryx(function (d){
   let found = parser.parse(d);
   let formatted = f.toCSV(found);
   fs.appendFile('lost.txt', formatted, function (err) {
      if (err) throw err;
    });
});