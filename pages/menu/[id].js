import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

const Details = ({food}) => {
  const router = useRouter();
  if(router.isFallback){
    return (
      <h2>Loading Page...</h2>
    )
  }
  return (
  <DetailsPage food={food}/>
  )
}
export default Details;
export async function getStaticPaths() {
  const response = await fetch(`${process.env.BASE_URL}/data`);
  const json = await response.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { id: `${food.id}` },
  }));
  return {
    paths,
    fallback:true
  };
}
export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const response = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      food:data,
    },
    revalidate: parseInt(process.env.REVALIDATE),

  };
}
