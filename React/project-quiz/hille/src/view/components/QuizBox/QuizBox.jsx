import React, { useState, useEffect } from "react";
let quizQestions = [
  {
    question: "מהו ההר הגבוה בעולם",
    answer: "האוורסט",
    answerAll: ["האוורסט", "חרמון", "גבעת התחמושת"],
  },
  {
    question: "איזה מתכת נוזלית בטמפרטורת החדר?",
    answer: "גליום",
    answerAll: ["גליום", "מגנזיום", "אלומיניום"],
  },
];

let randomNumber = 0;

function QuizBox() {
  const [answers, setanswers] = useState([
    {
      question: "איזה מתכת נוזלית בטמפרטורת החדר?",
      answer: "גליום",
      answerAll: ["גליום", "מגנזיום", "אלומיניום"],
    },
  ]);

  useEffect(() => {
    getQuestion();
  }, []);

  function getQuestion() {
    const random = Math.floor(Math.random() * quizQestions.length);
    console.log(quizQestions[random]);
    if (randomNumber === random) {
      getQuestion();
    } else {
      randomNumber = random;
      setanswers(quizQestions[random]);
    }
  }

  function checkAnswer() {}
  console.log(answers[0])


  return (
    <>
      <button onClick={getQuestion}>שאלה הבאה</button>
      <div>{answers.question}</div>
      {answers[0].answerAll.map((elm, index) => {
        return (
          
          <div key={index} onClick={() => checkAnswer(elm)}>
            {elm}
          </div>
        );
      })}
    </>
  );
}

export default QuizBox;
