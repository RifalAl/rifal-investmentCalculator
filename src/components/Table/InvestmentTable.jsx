import classes from "./InvestmentTable.module.css";

const InvestmentTable = ({ dataInvestment }) => {
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  let content;

  if (!dataInvestment) {
    content = (
      <tr>
        <td colSpan={5} className={classes["no-data"]}>No data is available</td>
      </tr>
    );
  } else {
    content = dataInvestment.map((data) => (
      <tr key={data.year}>
        <td>{data.year}</td>
        <td>{rupiahFormat.format(data.savingsEndOfYear)}</td>
        <td>{rupiahFormat.format(data.yearlyInterest)}</td>
        <td>{rupiahFormat.format(data.totalInterest)}</td>
        <td>{rupiahFormat.format(data.investedCapital)}</td>
      </tr>
    ));
  }
  return (
    <div className={classes.overflow}>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
