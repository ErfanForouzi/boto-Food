import { useEffect, useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";
import Card from "../modules/Card";
const CategoriesPage = ({data}) => {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(()=>{
const {difficulty,time} = router.query;
if(difficulty !==query.difficulty || time !==query.time){
  setQuery({difficulty,time})
}
  },[])
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = ()=>{
    console.log(query);
    router.push({pathname:"/categories",query})
  }
  return (
    <section className={styles.container}>
      <h2>Categories</h2>
      <section className={styles.subContainer}>
        <div className={styles.select}>
          <select
            name="difficulty"
            onChange={changeHandler}
            value={query.difficulty}
          >
            <option value="">Difficulty</option>
            <option value="Medium">Medium</option>
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </select>
          <select name="time" onChange={changeHandler} value={query.time}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button type="button" onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>
        {!data.length && <img src="/images/search.png" alt="Search Img"/>}
        {data.map((food)=>(
          <Card food={food} key={food.id}/>
        ))}

        </div>
      </section>
    </section>
  );
};
export default CategoriesPage;
