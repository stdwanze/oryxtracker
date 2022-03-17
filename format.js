

function toCSV(found){

    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    let date = yourDate.toISOString().split('T')[0]
    let f = found.join(";");
    f = date+";"+f;
    return f;
}


module.exports = {
    toCSV
}
