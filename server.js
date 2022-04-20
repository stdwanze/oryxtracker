const polka = require('polka');
const fs = require('fs');
const { dailyDiff } = require('./crunsh');
let port = 4000;
polka()
.get("/csv", (req, res) => {
    let csv = fs.readFileSync('lost.txt',"utf-8")
    res.end(csv);

})
.get("/last", (req, res) => {
    let csv = fs.readFileSync('last.json',"utf-8")
    res.end(csv);

})
.get("/diff", async (req,res) => {
    let list = await dailyDiff();
    let csv = list.join("\n");
    res.end(csv);
})

.listen(port, err => {
    if (err) throw err;
    console.log(`> Running on localhost:`+port);
  });