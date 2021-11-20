import { useState } from "react";
import "./styles.css";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];
  const [currentOption, setCurrentOption] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const answerButtonClick = (ansResponse) => {
    if (ansResponse === true) {
      alert("This ans is correct");
      setFinalScore(finalScore + 1);
    }
    const increament = currentOption + 1;
    if (increament < questions.length) {
      setCurrentOption(increament);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {finalScore} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentOption].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentOption].answerOptions.map((e) => (
              <button onClick={() => answerButtonClick(e.isCorrect)}>
                {e.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
