import Card from "../components/Card";
import UpperFrame from "../components/UpperFrame";
import styles from "./Desktop1.module.css";
const Desktop1 = (props) => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date("1995-12-25T23:15:30"),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("1995-12-25T23:15:30") },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date("1995-12-25T23:15:30"),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date("1995-12-25T23:15:30"),
  //   },
  // ];

  function addExpenseHandler(expenses){
    console.log(expenses);
    
  }
  return (
    
    <div className={styles.desktop1}>
      <Card>
      <UpperFrame 
      title={props.expenses[0].title}
      date={props.expenses[0].date}
      amount={props.expenses[0].amount}
      />
      <UpperFrame
      title={props.expenses[1].title}
      date={props.expenses[1].date}
      amount={props.expenses[1].amount} />
      <UpperFrame
      title={props.expenses[2].title}
      date={props.expenses[2].date}
      amount={props.expenses[2].amount}
      />
      <UpperFrame
      title={props.expenses[3].title}
      date={props.expenses[3].date}
      amount={props.expenses[3].amount}
      />
      </Card>
    </div>
   
  );
};

export default Desktop1;
