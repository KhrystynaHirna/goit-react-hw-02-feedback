import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  <ul>
    {options.map(option => {
      return (
        <li key={option}>
          <button
            type="button"
            onClick={onLeaveFeedback}
            value={option}
          ></button>
        </li>
      );
    })}
  </ul>;
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
