var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log("Welcome to Raj's quiz on his movie: Rab ne Bana di Jodi!!");


var userName = readlineSync.question(chalk.yellow.bold("Hi! What's your name?"));

console.log(chalk.blue.bold("Hai" + " "+userName + "! Good to have you here!"));

var userAge = readlineSync.question(chalk.yellow.bold("What's your age?"));

if(userAge < 18)
{
  console.log(chalk.blue.bold("Woww!! Good to connect with you, Kid!!"));
}
else
{
  console.log(chalk.blue.bold("Woww!! Good to connect with you, dude!!"));
}

console.log("Okay! Let's move into game, "+userName +"!");
console.log("----------------------------------------------");
console.log("Rules for playing This game: ")
console.log("----------------------------------------------");
console.log("1. There are 4 questions in this round.");
console.log("2. For every right answer you gain 5 points.");
console.log("3. For every wrong answer you loose 2 points.");
console.log("----------------------------------------------");

const questionBank = [
	{
		question: `
	What is Shah Rukh Khan name in the film Rab Ne Bana Di Jodi?
	a: Survinder Sahni
	b: Balwindar Sahni
	c: Balwant Singh\n`,
		answer: "a"
	},
	{
		question: `
	The film takes place at?
	a: Rajasthan
	b: Amritsar
   c: Andhra Pradesh\n`,
		answer: "b"
	},
	{
		question: `
	What is  Raj's slogan?
	a: Ek chutki sindhoor ki kimat tum kya jaano Taani Partner
	b: Hum hain raahi pyaar ke phir milenge chalthe chalthe
	c: Don ko pakadna muskhil hi nahi na mumkin hain\n`,
		answer: "b"
	},
	{
		question: `
	What's Anushka Sharma's name?
	a: Vaani
	b: Heera
	c: Taani\n`,
		answer: "c"
	}
];

var score=0;
var highScore=0;
var winner="";
var listofWinners={};

function quiz(question, answer){
  var userAnswer = readlineSync.question(chalk.blue.bold(question));

  if(userAnswer === answer){
    console.log(chalk.green.bold("Woow! That's absolutely a correct answer!"));
    score=score+5;
  }
  else{
    console.log(chalk.red.bold("Oops! It's a wrong answer!"));
    score=score-2;
  }

  console.log(chalk.yellow.bold('Congos!! Your Score: ' + score));

}

for(i=0; i<questionBank.length; i++){
  currentQuestion = questionBank[i]
  quiz(currentQuestion.question, currentQuestion.answer);
}

if(score >= highScore){
  highScore = score;
  winner = userName;
  console.log("------------------------------------------------")
  console.log(chalk.green.bold("Great! You are on our leaderboard, " + userName +"!"));
  console.log(chalk.green.bold("Winner: " + userName));

}

// Storing name, score of the user in a dictionary for reference.


listofWinners[userName]=score;
console.log(listofWinners);
