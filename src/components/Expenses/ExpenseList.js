import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <h2 className='expense-list__fallback'>no expenses found</h2>;
  }

  return (
    <ul className='expense-list'>
      {expenses.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
