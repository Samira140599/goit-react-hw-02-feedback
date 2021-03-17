import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <h3 className={s.title}>{message}</h3>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
