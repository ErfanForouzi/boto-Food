import styles from "./Attributes.module.css";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

const Attributes = () => {
  return (
    <section className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <article>
          <Fast />
          <p>Fast</p>
        </article>
        <article>
          <Food />
          <p>Food</p>
        </article>
        <article>
          <Choice />
          <p>Choice</p>
        </article>
        <article>
          <Clock />
          <p>Clock</p>
        </article>
      </div>
    </section>
  );
};
export default Attributes;
