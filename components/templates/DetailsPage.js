import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
const DetailsPage = ({ food }) => {
  return (
    <section className={styles.container}>
      <h2>Details</h2>
      <section className={styles.subContainer}>
        <article className={styles.banner}>
          <img src={`/images/${food.id}.jpeg`} alt={food.name} />
          <div>
            <h3>{food.name}</h3>
            <span className={styles.location}>
              <Location />
              {food.details[0].Cuisine}
            </span>
            <span className={styles.price}>
              {food.discount
                ? food.price*(100 - food.discount) / 100
                : food.price}
              $
            </span>
            {food.discount ? <span className={styles.discount}>{food.discount}% OFF</span>:null}
          </div>
        </article>
        <article className={styles.introduction}>
            {food.introduction}
        </article>
        <article className={styles.details}>
          <h4>Details</h4>
          <ul>
            {food.details.map((detail,index)=>(
              <li key={index}>
                <p>{Object.keys(detail)[0]} :</p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className={styles.details}>
          <h4>Ingredients</h4>
          <ul>
            {food.ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className={styles.recipe}>
          <h4>Recipe</h4>
          {food.recipe.map((item, index) => (
            <div key={index} className={index % 2 ? styles.odd : styles.even}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </article>
        <button>Add to Cart</button>

      </section>
    </section>
  );
};
export default DetailsPage;
