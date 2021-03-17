import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttons = Object.keys(options);

  return (
    <div className={s.container}>
      {buttons.map((button) => (
        <button
          type="button"
          key={button}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {button.toUpperCase().slice(0, 1 - button.length) +
            button.toLowerCase().slice(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
