//reverse a string

function reverseArray(word) {
    var string = word.split("").reverse();
    console.log(string.join(''));
    
}

//more concise

function reverseArray(word) {
    var string = word.split("").reverse().join('');
    console.log(string);
}

reverseArray('brian')


//fizzbuzz

function fizzBuzz(num) {
    for (var i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        console.log('fizzbuzz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}
}

fizzBuzz();


//english to pig latin translator

function addAy(string) {
    if (string.slice(0,1) == 'a') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else if (string.slice(0,1) == 'e') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else if (string.slice(0,1) == 'i') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else if (string.slice(0,1) == 'o') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else if (string.slice(0,1) == 'u') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else if (string.slice(0,1) == 'y') {
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else {
        var tring = string.slice(1,);
        var pig = tring + "ay";
        console.log(pig);
    }
}

//a little more concise

function addAy(string) {
    if ((string.slice(0,1) == 'a') ||
        (string.slice(0,1) == 'e') ||
        (string.slice(0,1) == 'i') ||
        (string.slice(0,1) == 'o') ||
        (string.slice(0,1) == 'u') ||
        (string.slice(0,1) == 'y')) {                      
        var stringAy = string + 'ay';
        console.log(stringAy);
    }
    else {
        var tring = string.slice(1,);
        var pig = tring + "ay";
        console.log(pig);
    }
}

addAy('brian');
addAy('awesome');


//devin solution

function pigLatin(word) {
    var wordSplit = word.split('');
    var wordShift = wordSplit.shift();
    var wordPush = wordSplit.push(wordShift);
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(wordShift)) {
        console.log(word + 'way');
    } else {
        console.log(wordSplit.join('') + 'ay');
    }
}

pigLatin('kiwi')



































