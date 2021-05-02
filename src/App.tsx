import React, { useEffect, useState } from 'react';
import {MdFileProcessor, Quiz} from 'quiz-too';
import logo from './logo.svg';
import './App.css';

function App() {
  const [quiz, setQuiz] = useState<Quiz>()
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/css/css-quiz.md').then(response=>response.text()).then(content=>{
      const mdFileProcessor = new MdFileProcessor(content);
      const quiz = mdFileProcessor.getQuiz();
      setQuiz(quiz);
    })
  })

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <pre>{JSON.stringify(quiz?.getChallenges(), undefined, 2)}</pre>
  );
}

export default App;
