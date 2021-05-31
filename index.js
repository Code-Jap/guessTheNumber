
//Vraagt om je naam

const userName = prompt(`Welkom, wat is je naam?`);

console.log(userName);




//Begroeting met je naam

alert(`Dag ${userName}!`);

alert(`We gaan een spel spelen waarbij jij gaat raden welk getal ik in gedachten heb.`)

alert(`Je bepaalt zelf de range waaruit je een getal gaat raden.`)




// Vraagt om een getal

const minNumber = prompt(`Kies je laagste getal`);
const maxNumber = prompt(`Kies je hoogste getal`);


console.log(minNumber);
console.log(maxNumber);




const min = minNumber;
const max = maxNumber;
let goodGuess = 0;
let wrongGuess = 0;

//Genereert een random getal

const getRandom =  (min, max) => {
   
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  
}

console.log(getRandom)


// loop voor 5 rondes

for (let i = 1; i <= 5; i++) {

    const randomNumber = getRandom(min, max)
    alert(`Ronde ${i}`)
    const userNumber = prompt(`Kies een getal tussen de ${minNumber}  en de  ${maxNumber}`)

    if (randomNumber == userNumber) {
        
        alert(`Dat is goed geraden! Ik had ook ${randomNumber} in gedachten!`)
        goodGuess ++
    } else {
        
        alert(`Helaas, ik had ${randomNumber} in gedachten.`)
        wrongGuess ++
    }
    alert(`Dit was ronde ${i} van 5!`)
}

alert(`Dat was het! Je had ${goodGuess}x goed geraden en ${wrongGuess}x fout geraden. Bedankt voor het spelen ${userName}!`)


























/*

if (number == getRandom(minNumber, maxNumber)) {
    alert("Goed geraden " + userName + "!!")
} else {
    alert("Helaas " + userName + ", probeer het nog eens")
}


console.log(number);
console.log(getRandom(minNumber, maxNumber));

*/


/*


//1 & 2 Vraagt om je naam
const userName = prompt("Welkom, wat is je naam?");
console.log(userName);


// 3. Begroeting met je naam
alert("Dag " + userName + "!");
alert("Je mag zo zelf de range bepalen, waaruit jij een getal gaat raden")

//4. Vraagt om een getal
const minNumber = parseInt(prompt("Kies je laagste getal "));
const maxNumber = parseInt(prompt("Kies je hoogste getal"));
const number = prompt("Voer een getal in die ligt tussen de 0 en 25");


const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min );
};



console.log(getRandom(minNumber, maxNumber));


if (number == getRandom(minNumber, maxNumber)) {
    alert("Goed geraden " + userName + "!");
} else {
    alert("wrong num");
}
*/


/*

// Mijn code met ergens een foutje
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandom(minNumber, maxNumber));

if (number == getRandom(minNumber, maxNumber)) {
    alert("Goed geraden " + userName + "! Ik had ook " + number + " in gedachten!")
}

else {
    alert("Helaas " + userName + ", probeer het nog eens")
}


*/
