import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

const QuestionList = props =>  {
  let questions = props.questions.data.map(questionInfo => {
    const { id, question, answer } = questionInfo;

    return (
      <Question
        key={id}
        question={question}
        answer={answer}
      />
    );
  });

  return (
    <div>
      {questions}
    </div>
  );
};

export default QuestionList;
