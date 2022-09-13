import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpense from "./Components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
    // console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses setExpenses={setExpenses} item={expenses}></Expenses>
    </div>
  );
};

export default App;
