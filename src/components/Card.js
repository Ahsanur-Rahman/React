
import styles from "./Card.module.css";
const Card = (props) => {
    const StyleFromUpperFrame= props.className
    
  return <div className={styles.card}>
        {props.children}
        
    </div>
    ;
};

export default Card;
