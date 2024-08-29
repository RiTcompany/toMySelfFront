import React from 'react';
import questions from './questionsData';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/test.css';

const QuestionPanel = ({ currentQuestion, onQuestionChange, answeredQuestions }) => {
  return (
      <div>
          {questions.map(question => (
              <React.Fragment key={question.id}>
                  {question.title === '!' && <br />} {/* Добавляем перенос строки перед кнопкой, если заголовок вопроса равен '!' */}
                  <button 
                      onClick={() => onQuestionChange(question.id)}
                      disabled={currentQuestion === question.id}
                      className={`q-button ${answeredQuestions && answeredQuestions[question.id] || question.title === '!' ? 'highlighted-question' : ''}`}
                  >
                      {question.title}
                  </button>
              </React.Fragment>
          ))}
      </div>
  );
};

export default QuestionPanel;