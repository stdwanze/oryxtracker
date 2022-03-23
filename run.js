const loader = require('./getData');
const parser = require('./parseData');

const f = require('./format');
const c = require('./io');


loader.loadoryx(function (d){
   let found = parser.parseBasic(d);
   let properpared = parser.parseAdvanced(found);
   let formatted = f.toCSV(found);
   c.writeToFile(formatted)
   c.savelast(properpared);
});