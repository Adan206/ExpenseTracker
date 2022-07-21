import { useState } from "react";
import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const onChangeTitle = () => {
    setTitle("UPDATED");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={onChangeTitle}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
