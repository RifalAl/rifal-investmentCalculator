import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/Table/InvestmentTable";
import Modals from "./components/UI/Modals";

function App() {
  const [dataInvestment, setDataInvesment] = useState("");
  const [isError, setIsError] = useState(false);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const initialInvestment = userInput["current-savings"];
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest =
        currentSavings - initialInvestment - yearlyContribution * (i + 1);
      const investedCapital =
        +initialInvestment + +(yearlyContribution * (i + 1));
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: +yearlyInterest.toFixed(2),
        savingsEndOfYear: +currentSavings.toFixed(2),
        yearlyContribution: +yearlyContribution.toFixed(2),
        totalInterest: +totalInterest.toFixed(2),
        investedCapital: +investedCapital,
      });
    }
    setDataInvesment(yearlyData);
    // do something with yearlyData ...
  };

  const cancleErrorHandler = () => {
    setIsError(false);
  };

  return (
    <div>
      {isError && (
        <Modals
          title="Cannot Submit"
          message="Please fill every input field before submit"
          onClose={cancleErrorHandler}
        />
      )}
      <Header />
      <InvestmentForm
        onCalculate={calculateHandler}
        setDataInvesment={setDataInvesment}
        setIsError={setIsError}
      />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable dataInvestment={dataInvestment} />
    </div>
  );
}

export default App;
