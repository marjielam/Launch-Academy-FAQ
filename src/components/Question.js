import React from 'react';
import ReactDOM from 'react-dom';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.key,
      question: props.question,
      answer: props.answer,
      hidden: true,
      plusminus: "+"
    };

   this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    let answerHidden = !this.state.hidden;
    if (answerHidden) {
      this.setState({
        hidden: answerHidden,
        plusminus: "+"
      });
    } else {
      this.setState({
        hidden: answerHidden,
        plusminus: "-"
      });
    }
  }

  render() {
    return (
      <div>
        <p>
          <button type="button" onClick={this.handleButtonClick}>{this.state.plusminus}</button>
          {this.state.question}
        </p>
        <p hidden={this.state.hidden}>
          {this.state.answer}
        </p>
        <hr/>
      </div>
    );
  }
}

export default Question;
