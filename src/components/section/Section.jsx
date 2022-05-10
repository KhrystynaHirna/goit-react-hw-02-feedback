// import * as FeedbackOptions from 'components/feedback/FeedbackOptions';
// import Statistics from 'components/statistics/Statistics';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {/* <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/> */}
      {/* <Statistics /> */}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
