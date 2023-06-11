import styles from "./DateHolding.module.css";
const DateHolding = (props) => {
  const month=props.date.toLocaleString('en-US',{month:'long'})
  const day=props.date.toLocaleString('en-US',{day:'2-digit'})
  const year=props.date
  return (
    <div className={styles.april2023Parent}>
      <div className={styles.april2023}>
        <p className={styles.april}>{`${month}`}</p>
        <p className={styles.april}>{year}</p>
      </div>
      <div className={styles.div}>{`${day}`}</div>
    </div>
  );
};

export default DateHolding;

