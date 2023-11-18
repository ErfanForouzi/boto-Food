import CategoriesPage from "../../components/templates/CategoriesPage";

const Categories = ({data}) => {
  return <CategoriesPage data={data} />;
};
export default Categories;

export async function getServerSideProps(context){
  const {query:{difficulty,time}}  = context
const response = await fetch(`${process.env.BASE_URL}/data`);
const data = await response.json();
const filteredData = data.filter((item)=>{
  const difficultyResault = item.details.filter((detail)=>(
    detail.Difficulty && detail.Difficulty === difficulty
  ))

  const timeResault = item.details.filter((detail)=>{
    const cookingTime = detail["Cooking Time"] || "";
    const [timeDetail] = cookingTime.split(" ");
    if(time==="less" && timeDetail && parseInt(timeDetail) <=30){
      return detail
    }
    else if(time ==="more" && timeDetail && parseInt(timeDetail)>30){
      return detail
    }
  })

if(time && difficulty && difficultyResault.length && timeResault.length){
  return item
} 
else if(time && !difficulty && timeResault.length){
  return item
}
else if(!time && difficulty && difficultyResault.length){
  return item
}
})

return {
  props:{
  data:filteredData
  }
}
}
