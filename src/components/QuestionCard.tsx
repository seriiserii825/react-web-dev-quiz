import React from "react";
import type { IQuestion } from "../data/questions";

interface Props {
  data: IQuestion;
}

export const QuestionCard: React.FC<Props> = ({ data }) => {
  const { question, options, answer } = data;
  return <div>{question}</div>;
};
