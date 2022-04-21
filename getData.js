const https = require('https')



function loadoryx(consumer){

    let first = "";
    loadurl('https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html?m=1', function (html){
        first = html;
        loadurl("https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-ukrainian.html", function (html2){
            let ret = first + html2;
            consumer(ret);
        });

    });

}



function loadurl(url, consumer){


    const req = https.get(url, res => {
        let data = [];

        res.on('data', d => {
            data.push(d);
        });
        res.on('end', () => {
            const html = Buffer.concat(data).toString();
            consumer(html);
        });
      }).on('error', err => {
        console.log('Error: ', err.message);
      });;
}


module.exports = {
    loadoryx
}