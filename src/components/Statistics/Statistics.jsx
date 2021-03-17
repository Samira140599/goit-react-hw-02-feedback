import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={s.container}>
      <p className={s.paragraph}>Good: {good}</p>
      <p className={s.paragraph}>Neutral: {neutral}</p>
      <p className={s.paragraph}>Bad: {bad}</p>
      <p className={s.paragraph}>Total: {total}</p>
      <p className={s.paragraph}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
