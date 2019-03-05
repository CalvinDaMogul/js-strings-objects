const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
    //do some stuff
    //under 21 'drink some water'
    //over 21 under 65 'have a beer'
    //over 65 'take a nap'

if (num >=21 && num < 65) { return'Have a beer'
}
 else if (num <= 65) { return'take a nap'
}
else {
    return'drink some water'
}
};

printToDom('thirsty', iAmThursty(55));
printToDom('thirsty', iAmThursty(11));
printToDom('thirsty', iAmThursty(67));

console.log(1 ==='1');//false
//console.log(1 =='1');//true
console.log(1 !== '2')//true

console.log('cats'.length)//how many characters in a string
const quote = 'winter is coming';
console.log(quote.indexOf('is')); //returns 7