import React, { useState } from "react";
import type { IQuestion } from "../data/questions";

interface Props {
  data: IQuestion;
  onAnswer: (option: string) => void;
  wasSelected: boolean;
}

export const QuestionCard: React.FC<Props> = ({ data, onAnswer, wasSelected }) => {
  const { question, options, answer } = data;

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-2xl border-gray-700">
      <p className="mb-4">{question}</p>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            onClick={() => onAnswer(option)}
            className="text-left px-4 py-3 cursor-pointer bg-blue-700 text-white rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
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
