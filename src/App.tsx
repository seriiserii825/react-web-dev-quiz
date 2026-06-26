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
        />
      </div>
    </div>
  );
}

export default App;
