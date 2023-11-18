import Card from "../modules/Card";
import styles from "./MenuPage.module.css";
const MenuPage = ({ data }) => {
  return (
    <section className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((food) => (
          <Card key={food.id} food={food}/>
        ))}
      </div>
    </section>
  );
};
export default MenuPage;
