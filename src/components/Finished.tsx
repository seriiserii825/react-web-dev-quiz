import React from "react";

interface Props {
  total: number;
  answered: number;
}

export const Finished: React.FC<Props> = ({ total, answered }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-purple-500 mb-2">Quiz Finished!</h2>
      <div className="mb-4 p-4">
        You answered {answered} out of {total} questions correctly.
      </div>
      <button
        className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Restart Quiz
      </button>
    </div>
  );
};
