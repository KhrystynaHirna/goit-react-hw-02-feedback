import PropTypes from 'prop-types';
const { Component } = require('react');

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <title>Please leave feedback</title>
        <button type="button" onClick={this.onLeaveFeedback.state.good}>
          Good
        </button>
        <button type="button" onClick={this.onLeaveFeedback.state.neutral}>
          Neutral
        </button>
        <button type="button" onClick={this.onLeaveFeedback.state.bad}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {};

export default FeedbackOptions;
