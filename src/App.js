import { Component } from 'react';
import './App.css';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  countFeedback = e => {
    const feedback = e.target.textContent;
    this.setState(prevFeedback => ({
      ...prevFeedback,
      ...{ [feedback.toLowerCase()]: prevFeedback[feedback.toLowerCase()] + 1 },
    }));
  };

  countTotalFeedback() {
    const values = Object.values(this.state);

    const totalFeedback = values.reduce((acc, value) => acc + value, 0);

    return totalFeedback;
  }

  countPositiveFeedbackPercentage(totalFeedback) {
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedback);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFedback = this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
