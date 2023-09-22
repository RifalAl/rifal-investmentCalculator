import { useState } from "react";

import classes from "./InvestmentForm.module.css";
import InvestmentInput from "./InvestmentInput";
import InvestmentActions from "./InvestmentActions";

const InvestmentForm = ({ onCalculate, setDataInvesment, setIsError }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyConatribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const resetHandler = () => {
    setCurrentSavings("");
    setYearlyConatribution("");
    setExpectedReturn("");
    setDuration("");
    setDataInvesment("")
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(!currentSavings || !yearlyContribution || !expectedReturn || !duration){
      setIsError(true)
      setDataInvesment("")
      return;
    }
    onCalculate({
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <InvestmentInput
          value={currentSavings}
          onChange={setCurrentSavings}
          id={"current-savings"}
          label={"Current Savings"}
        />
        <InvestmentInput
          value={yearlyContribution}
          onChange={setYearlyConatribution}
          id={"yearly-contribution"}
          label={"Yearly Savings"}
        />
      </div>
      <div className={classes["input-group"]}>
        <InvestmentInput
          value={expectedReturn}
          onChange={setExpectedReturn}
          id={"expected-return"}
          label={"Expected Interest (%, per year)"}
          percent={true}
        />
        <InvestmentInput
          value={duration}
          onChange={setDuration}
          id={"duration"}
          label={"Investment Duration"}
          percent={false}
          years={true}
        />
      </div>
      <InvestmentActions onReset={resetHandler} />
    </form>
  );
};

export default InvestmentForm;
