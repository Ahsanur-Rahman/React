import styles from "./UpperFrame.module.css";
import DateHolding from "./DateHolding";
import Card from "./Card";
const UpperFrame = (props) => {
  return (
    <Card>
    <div className={styles.upperFrame}>
      
      <div className={styles.mainFrame}>
      <div><DateHolding date={`${props.date}`}/></div>
        <div className={styles.dateAndTitleFrame}>
       
          <div className={styles.carInsurance}>{`${props.title}`}</div>
          
        </div>
        <div className={styles.amountFrame}>
          <div className={styles.carInsurance}>{`${props.amount}`}</div>
        </div>
      </div>
    </div>
    </Card>
   
  );
};

export default UpperFrame;
