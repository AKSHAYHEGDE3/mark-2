const readlineSync = require("readline-sync");

let score = 0;

const highestScore = 3;
//array of que and ans
const queans =[
    {
        que : "best anime from big 3: ",
        ans : "one piece"
    },
    {
        que : "who is stronger: goku vs saitama: ",
        ans : "goku"
    },
    {
        que : "name of monster inside yuji itadori: ",
        ans : "sakuna"
    },
    {
        que : "anime with highest rating: ",
        ans : "fmab"
    },
    {
        que : "narutos most used jutsu: ",
        ans : "shadow clone jutsu"
    },
]

function start(){
    const user = readlineSync.question("please enter your name: ");
    console.log(`wlecome ${user}`);
    const watch = readlineSync.keyInYN("do you watch anime?:press y if yess ");
     if(watch){
         console.log("great !")
         console.log('now answer few of my Ques')
     } else{
         console.log("ypu should try it , i bet you will enjoy!")
         console.log('now answer few of my Ques')
     }
}

function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("right ans");
        score = score + 1;
    } else {
        console.log("wrong ans");
    }

    console.log("score: ", score);
    console.log("-------------")

}

function game() {
    for (var i=0; i<queans.length; i++) {
      var currentQuestion = queans[i];
      play(currentQuestion.que, currentQuestion.ans)
    }
  }

  function showScores() {
    console.log("YAY! You SCORED: ", score);

    if(score>highestScore){
        console.log("congrats,you beat the highest scorer")
    }else {
        console.log("try to beat the highestscore:3")
    }

  }

start();
game();
showScores();