import "./NewExpense.css";
import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    // console.log(expenseData);
    setIsEditing(false);
  };

  const startIsEditing = () => {
    setIsEditing(true);
  };
  const stopIsEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startIsEditing}>Add New Expense</button>}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={SaveExpenseHandler}
          onCancel={stopIsEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
