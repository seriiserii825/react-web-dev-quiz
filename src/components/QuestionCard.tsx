import React from "react";
import type { IQuestion } from "../data/questions";

interface Props {
  data: IQuestion;
  onAnswer: (option: string) => void;
  wasSelected: boolean;
  selected?: string;
  currentQuestionIndex: number;
  totalQuestionsLength: number;
}

export const QuestionCard: React.FC<Props> = ({
  data,
  onAnswer,
  wasSelected,
  selected,
  currentQuestionIndex,
  totalQuestionsLength,
}) => {
  const { question, options, answer } = data;

  function getButtonStyle(option: string) {
    if (!wasSelected)
      return "bg-blue-700 text-white hover:bg-blue-800 hover:scale-101 transition duration-200";

    if (option === answer) {
      return "bg-green-600 text-white";
    } else if (option !== answer && option === selected) {
      return "bg-red-600 text-white";
    } else {
      return "bg-gray-700 text-white";
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-120 border-gray-700">
      <h2 className="text-right font-xl text-white p-4">
        {currentQuestionIndex} / {totalQuestionsLength}
      </h2>
      <p className="mb-4">{question}</p>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            onClick={() => onAnswer(option)}
            className={`${getButtonStyle(option)} text-left px-4 py-3 cursor-pointer bg-blue-700 text-white rounded-lg disabled:opacity-75 disabled:cursor-not-allowed `}
            key={index}
            disabled={wasSelected}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
