

let line = "Russia - 1706, of which: destroyed: 827, damaged: 32, abandoned: 221, captured: 626";

let regex = /(^[a-zA-Z]*)\s\-\s(\d*).*(destroyed)\:\s(\d*).*(damaged)\:\s(\d*).*(abandoned)\:\s(\d*).*(captured)\:\s(\d*)/;
//let regex = /(^[a-zA-Z]*)/;


let m = line.match(regex);


console.log(m);