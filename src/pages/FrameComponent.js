import { useState } from "react";
import styles from "./FrameComponent.module.css";
const FrameComponent = ( props) => {
  
  const [userInput,setUserInput]=
  useState({
    enteredAmount:'',
    enteredTitle:'',
    enteredDate:''
  })

  function titleHandler(event){
      
      setUserInput((pre)=>{
    
        return{ 
          ...pre,
          enteredTitle:event.target.value
        }
      })
  }
  function amountHandler(event){
    setUserInput((pre)=>{
  
      return{ 
        ...pre,
        enteredAmount:event.target.value
      }
    })
}
function dateHandler(event){
  setUserInput((pre)=>{

    return{ 
      ...pre,
      enteredDate:event.target.value
    }
  })
}
function handleSubmit(event){
  event.preventDefault();
  const newExpense={
    title:userInput.enteredTitle,
    amount:userInput.enteredAmount,
    date:userInput.enteredDate
   
  }
 
    props.onSaveExpense(newExpense)


}

  return (
    <form  onSubmit={handleSubmit} className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.titleParent}>
              <label className={styles.title}>Title</label>
              <input value={userInput.enteredTitle} onChange={titleHandler} className={styles.frameChild} type="text" />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.titleParent}>
              <label className={styles.title}>amount</label>
              <input value={userInput.enteredAmount} onChange={amountHandler} className={styles.frameChild} type="text" />
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.instanceWrapper}>
            <div className={styles.titleParent}>
              <label className={styles.title2}>Date</label>
              <input value={userInput.enteredDate} onChange={dateHandler} type="number" min='0.1' step='0.1'  className={styles.frameChild} />
            </div>
          </div>
        </div>
      </div>
      <button type="submit"  className={styles.addExpenseWrapper}>
        <div className={styles.addExpense}>Add Expense</div>
      </button>
    </form>
  );
};

export default FrameComponent;
