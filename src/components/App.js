import React, { Component } from 'react';
import QuestionList from './QuestionList';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questions: {props}
//       };
//
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>We are here to help</h1>
//         <QuestionList
//           questions={this.state.questions}
//         />
//       </div>
//     );
//   }
// };

const App = props => {
  return (
    <div>
      <h1>We are here to help</h1>
      <QuestionList
        questions={props}
      />
    </div>
  );
};

export default App;
