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


const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep',
    }
};

//dot notation
console.log(bucketOCats.cat2);

//bracket notation
console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)//42


let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  console.log( 'Our companys lawyer is ${employee.name}');
  console.log('Jeff was hired on', employee['hire_date']);
  employee.vacation_days = 20;

  let eom = "employee_of_the_month";
 employee[eom] = false;   