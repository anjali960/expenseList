import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { setExpenses, items } = props;

  function deleteHandler(id) {
    const res = items.filter((item) => item.id !== id);
    setExpenses(res);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div>{props.id}</div>
      <div className="expense-item__price">${props.amount}</div>
      <div className="cancel" onClick={() => deleteHandler(props.value)}>
        X
      </div>
    </Card>
  );
};

export default ExpenseItem;
