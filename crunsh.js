let io = require('./io');
let { matchLine } =  require('./parseData');

async function loaddata(){
    let russdata = [], ukrdata = [];
    let alldata = await io.load();
    let alllines = alldata.split('\n');
    alllines.forEach(line => {
        let splitlines = line.split(';');
        russdata.push(splitlines[0]+";"+splitlines[1]);
        ukrdata.push(splitlines[0]+";"+splitlines[2]);
    });

    return { russdata, ukrdata};

}

function reduceToSingularDays(list){

    let reduces = [];
    let lastdate = "";
    let lastval = 0;
    list.forEach(line=> {
        let splitline = line.split(';');
        if(!(lastdate == splitline[0])){
            if(lastval != 0) reduces.push(lastdate+";"+lastval);
            lastdate = splitline[0];
        }
        lastval = splitline[1];

    });

    return reduces;
}

function reduceToValue(full){

    let reduces = [];
    full.forEach(line=> {
        let splitline = line.split(';');
        let lineobj = matchLine(splitline[1]);

        reduces.push(splitline[0]+";"+lineobj.total);
    });
    return reduces;

}


async function dailyDiff(){

    let ddiff = [];
    let lastdiff = 0;
    let loaded =  await loaddata();
    var russ = reduceToSingularDays(loaded.russdata);
    var ukr = reduceToSingularDays(loaded.ukrdata);
    russ = reduceToValue(russ);
    ukr = reduceToValue(ukr);

    for(let i = 0; i < russ.length; i++){
        let russsplit = russ[i].split(";");
        let ukrsplit = ukr[i].split(";");
        let diff = russsplit[1]-ukrsplit[1];
        let change = diff-lastdiff;
        ddiff.push(russsplit[0]+ ";"+ diff+";"+change);
        lastdiff = diff;
    }

    return ddiff;

}

module.exports ={
    dailyDiff
}