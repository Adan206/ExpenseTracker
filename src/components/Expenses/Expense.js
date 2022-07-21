import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../Expenses/ExpensesChart";
import "./Expense.css";
import Card from "../UI/Card";

function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filteredChangeHandler = (eventTragetValue) => {
    setFilteredYear(eventTragetValue);
  };

  // let contentExpenses = <p style={{ color: "#fff" }}>no expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   contentExpenses = filteredExpenses.map((expense) => (
  //     <ExpenseItems
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       key={expense.id}
  //     />
  //   ));
  // }

  return (
    <>
      <Card className='expense'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFiltered={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && (
          <p style={{ color: "#fff" }}>no expenses found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItems
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))} */}

        {/* {filteredExpenses.length === 0 ? (
          <p style={{ color: "#fff" }}>no expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItems
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )} */}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItems
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))} */}
      </Card>
    </>
  );
}

export default Expense;
