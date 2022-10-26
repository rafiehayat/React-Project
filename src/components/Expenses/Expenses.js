import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
// import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* <Expenseitem
          date={props.item[0].date}
          title={props.item[0].title}
          amount={props.item[0].amount}
        />
        <Expenseitem
          date={props.item[1].date}
          title={props.item[1].title}
          amount={props.item[1].amount}
        />
        <Expenseitem
          date={props.item[2].date}
          title={props.item[2].title}
          amount={props.item[2].amount}
        />
        <Expenseitem
          date={props.item[3].date}
          title={props.item[3].title}
          amount={props.item[3].amount}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
