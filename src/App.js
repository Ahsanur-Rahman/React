import {
  Routes,
  Route,

} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import FrameComponent from "./pages/FrameComponent"

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date("1995-12-25T23:15:30"),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("1995-12-25T23:15:30") },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date("1995-12-25T23:15:30"),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date("1995-12-25T23:15:30"),
    },
  ];

  function onSaveExpense(enteredData){
    const newExpense={
      ...enteredData,
      id:Math.random().toString()
    }
  }


  return (
    <div>
<FrameComponent onSaveExpense={onSaveExpense}/>
<Desktop1 expenses={expenses}/>
    </div>
     
   
  );
}
export default App;
