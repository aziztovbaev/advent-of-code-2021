const outputValues = ['fdgacbe', 'gcbe', 'cgb', 'dgebacf', 'gc', 'cg', 'cg', 'cgb', 'cb', 'gecf', 'egdcabf', 'bgf', 'gebdcfa', 'ecba', 'ca', 'fadegcb', 'cefg', 'fcge', 'gbcadfe', 'ed', 'gbdfcae', 'bgc', 'cg', 'cgb', 'fgae', 'fg'];

let countOfOne = 0;
let countOfFour = 0;
let countOfSeven = 0;
let countOfEight = 0;

const regexForOne = /[ab]{2}/g;
const regexForFour = /[dab]{3}/g;
const regexForSeven = /[eafb]{4}/g;
const regexForEight = /[abcdefg]{7}/g;

const resultForOne = outputValues.filter(outputValue => outputValue.match(regexForOne));
for (let i=0; i < resultForOne.length; i++){
    if(resultForOne[i].length == 2){
        countOfOne += 1;
    }
}

const resultForFour = outputValues.filter(outputValue => outputValue.match(regexForFour));
for (let i=0; i < resultForFour.length; i++){
    if(resultForFour[i].length == 3){
        countOfFour += 1;
    }
}

const resultForSeven = outputValues.filter(outputValue => outputValue.match(regexForSeven));
for (let i=0; i < resultForSeven.length; i++){
    if(resultForSeven[i].length == 4){
        countOfSeven += 1;
    }
}


const resultForEight = outputValues.filter(outputValue => outputValue.match(regexForEight));
for (let i=0; i < resultForEight.length; i++){
    if(resultForEight[i].length == 7){
        countOfEight += 1;
    }
}

console.log(`Number of digit 1: ${countOfOne}\nNumber of digit 4: ${countOfFour}\nNumber of digit 7: ${countOfSeven}\nNumber of digit 8: ${countOfEight}`);