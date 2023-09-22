import CurrencyInput from "react-currency-input-field";

import classes from "./InvestmentInput.module.css";

const InvestmentInput = ({
  id,
  label,
  value,
  onChange,
  percent,
  years,
  isError,
}) => {
  let prefix;
  let suffix;

  if (years === true && percent === false) {
    prefix = "";
    suffix = value > 1 ? " Years" : " Year";
  } else if (percent) {
    prefix = "";
    suffix = "%";
  } else {
    prefix = "Rp";
    suffix = "";
  }
  return (
    <p>
      <label className={classes["input-label"]} htmlFor={id}>
        {label}
      </label>
      <CurrencyInput
        id={id}
        name={id}
        value={value}
        decimalsLimit={0}
        decimalSeparator={percent ? "." : ","}
        groupSeparator={percent ? "," : "."}
        prefix={prefix}
        suffix={suffix}
        onValueChange={(value) => onChange(value)}
        className={classes.input}
      />
      {isError && (
        <span className={classes["error-message"]}>
          *Fill this field before calculate data
        </span>
      )}
    </p>
  );
};

export default InvestmentInput;
