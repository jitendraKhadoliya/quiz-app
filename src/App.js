// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js

import React from "react";
// import QuizDetail from "./screens/QuizDetail";
import QuizHero from "./screens/QuizHero";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import QuizDetail from "./screens/QuizDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizHero />} />
        <Route path="/quiz-started" element={<QuizDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
