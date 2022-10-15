const prompt = require('prompt-sync')();

function largerNumber(){
    let question1 = parseInt(prompt("Type Number: "))
    let question2 = parseInt(prompt("Type another number: "));
    if (question1 > question2){
        console.log("First Input is larger: " + question1);
     }
     else if(question2 > question1){
         console.log("Second Input is larger: " + question2)
     }
     else{
        console.log("Both inputs are the same.")
     }
}
largerNumber();
