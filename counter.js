const questions = [{
  category:"history",
  question:"World War 1 ended on?",
  choices:["1917","1918","1919"],
  answer: "1918"
  },
  {
    category:"biology",
    question:"Theory of Evolution given by?",
    choices:["Charles Darwin", "Benjamin Franklin", "Albert Einstein"],
    answer: "Charles Darwin" 
  },
  {
    category:"mathematics",
    question:"2+2?",
    choices:["4","3","5"],
    answer: "4"
  },
  {
    category:"physics",
    question:"Theory of Relativity was given by?",
    choices:["Albert Einstein", "Issac Newton", "Nicola Tesla"],
    answer: "Albert Einstein"
  },
  {
    category:"current-affairs",
    question:"Current President of The European Commission?",
    choices:["Ursula von der Leyen","Antonio Costa","Kaja Kallas"],
    answer: "Ursula von der Leyen"
  }
]
function getRandomQuestion(arr){
    let random = Math.floor(Math.random()*5);
    console.log(random);
  return arr[random];
}
function getRandomComputerChoice(arr){
    let random = Math.floor(Math.random()*2);
    return arr[random];
}
function getResults(question, choices){
    if(choices===question.answer){
        return "The computer's choice is correct!";
    }
    else{
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}
console.log(getRandomComputerChoice(getRandomQuestion(questions).choices));
// console.log(questions.choices[2])