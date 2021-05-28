import React,{useState,useEffect} from "react";
let quizQestions = [
  {
      question: "מהו ההר הגבוה בעולם",
      answer: "האוורסט",
      answerAll: ["האוורסט","חרמון","חרמון"]
    },{
        question: "איזה מתכת נוזלית בטמפרטורת החדר?",
        answer: "האוורסט",
        answerAll:["האוורסט","חרמון","חרמון"]
      },
];

let randomNumber = 0

function QuizBox() {
const [answers,setanswers] = useState([{
    question: "איזה מתכת נוזלית בטמפרטורת החדר?",
    answer: "האוורסט",
    answerAll:["האוורסט","חרמון","חרמון"]
  }])

useEffect(() => {
    getAnswer()
}, [])


function getAnswer(){
    const random = Math.floor(Math.random()*quizQestions.length)
    console.log(quizQestions[random])
    if (randomNumber === random){
        getAnswer()
    }
    else{
        randomNumber = random
        setanswers(quizQestions[random])
    }
}

function checkAnswer(){

}


  return (
      <>
      <button onClick={getAnswer}>שאלה הבאה</button>
  <div>{answers.question}</div>
  {answers.answerAll.map((elm,index)=>{
 return(<div key={index} onClick={()=>checkAnswer(elm)}>{elm}</div>)
  })}
  </>
  );
}

export default QuizBox;
