import React from "react";
//  types
import { AnswerObject } from "../App";
// styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  // set callback type
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // set type to AnswerObject and type separator '|' undefined
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            // use optional chaining of props pass
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
