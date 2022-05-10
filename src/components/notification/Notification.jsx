import PropTypes from 'prop-types';

export const Notification = message => {
  return alert({ message });
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
