import { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { questions } from "./data/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [wasSelected, setWasSelected] = useState<boolean>(false);

  function handleAnswer(option: string) {
    if (wasSelected) return;
    setSelectedAnswer(option);
    setWasSelected(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  }

  const isLastQuestion = currentQuestion === questions.length - 1;

  function goToNextQuestion() {
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setWasSelected(false);
    } else {
      setIsFinished(true);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 text-white flex items-center justify-center flex-col">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-500 mb-2">Quiz App</h1>
        <p className="text-gray-400 mb-4">Test you knowledge</p>
        <div className="mb-4 p-4">Score: {score}</div>
        <QuestionCard
          data={questions[currentQuestion]}
          wasSelected={wasSelected}
          onAnswer={handleAnswer}
          selected={selectedAnswer}
          currentQuestionIndex={currentQuestion + 1}
          totalQuestionsLength={questions.length}
        />
        {wasSelected && (
          <button
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={goToNextQuestion}
          >
            {isLastQuestion ? "See result" : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
