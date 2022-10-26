import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2022, 10, 12),
  },
  {
    id: "e2",
    title: "Tution Fee",
    amount: 350,
    date: new Date(2022, 10, 10),
  },
  {
    id: "e3",
    title: "House Fee",
    amount: 850,
    date: new Date(2022, 10, 15),
  },
  {
    id: "e4",
    title: "Library Fee",
    amount: 50,
    date: new Date(2022, 10, 16),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // useEffect(()=> {
  // fetch('put api here')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setExpenses(data);
  //   });
  // },[])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
