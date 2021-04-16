var readLineSync = require('readline-sync')
const chalk = require('chalk')

var name = readLineSync.question(chalk.blueBright("Enter your Name: "))

console.log(chalk.red("\nHello There "+name.toUpperCase()+"!"))
console.log(chalk.greenBright("\nTake this Ultimate Quiz to see How Much you Know about Liverpool Football Club"))
console.log(chalk.redBright("\nIMP: To answer a Question, just enter a/b/c/d"))

currentRecordHolders = [
  {
    name:"qLimAxz", score:3
  },
];

questions = [
  {
    question:"Who was the first Liverpool player to win the 'Alan Hardaker Trophy'? : ", options:"a. Luis Garic\nb. Luis Suarez\nc. Steve McManaman\nd. Ronnie Whelan", answer:"c"
  },
  {
    question:"What is the highest number of games Liverpool have ever played in a season? : ", options:"a. 65\nb. 67\nc. 71\nd. 62",answer:"b"
  },
  {
    question:"Who is the last Liverpool outfield player to appear in every game of a league campaign? : ", options:"a. Martin Skrtel\nb. James Milner\nc. Jose Enrique\nd. Lucas Leiva", answer:"a"
  },
  {
    question:"When Liverpool famously won 4-1 at Old Trafford in March 2009, which player was injured in the warm-up and replaced in the starting XI by Sami Hyypia? : ", options:"a. Xabi Alonso\nb. Ryan Babel\nc. Andrea Dossena\nd. Alvaro Arbeloa", answer:"d"
    },
  {
    question:"Prior to an Anfield clash against which team was Michael Owen presented with the Ballon D'Or in 2002? : ", options:"a. Manchester United\nb. Wolves\nc. Derby County\nd. Leeds United", answer:"c"
  }
]

userScore = 0;

function nextQuestion(question, options, answer){

  var userAnswer = readLineSync.question(chalk.blueBright(question)+"\n"+chalk.yellowBright(options)+"\n-> ")

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.greenBright("Yop, That's Right!!!"))
    userScore++
  }else{
    console.log(chalk.redBright("Nah :("))
  }
  console.log(chalk.greenBright("Current Score: "+userScore));
  console.log(chalk.magentaBright("------------------------"))
}

console.log();
for (i=0;i<questions.length;i++){
  nextQuestion(questions[i].question, questions[i].options, questions[i].answer)
}
console.log(chalk.yellowBright("\nYour Total score: "+userScore))

highscoreflag = 0;
for(i=0;i<currentRecordHolders.length;i++){
  if(userScore > currentRecordHolders[i].score){
    console.log("Wowowowowowow, NEW HIGHSCORE!!!!!")
    highscoreflag = 1;
    break;
}
}
if(highscoreflag == 0){
  console.log("FAIR ENOUGH M8, TRY AGAIN :)")
}
