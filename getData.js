const https = require('https')







function loadoryx(consumer){

    const req = https.get('https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html?m=1', res => {
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