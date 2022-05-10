import React, { Component } from 'react';
import { Section } from '../section/Section';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Notification } from '../notification/Notification';
import s from './App.module.css';

class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }));
  };

  totalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  positivePercentage() {
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  }

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback()}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.neutral}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
