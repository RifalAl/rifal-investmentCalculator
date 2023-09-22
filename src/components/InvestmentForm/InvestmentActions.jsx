import classes from "./InvestmentActions.module.css"

const InvestmentActions = ({onReset}) => {
  return (
    <p className={classes.actions}>
      <button onClick={onReset} type="reset" className={classes.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={classes.button}>
        Calculate
      </button>
    </p>
  );
};

export default InvestmentActions;
