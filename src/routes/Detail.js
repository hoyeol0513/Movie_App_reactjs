import { useEffect } from "react";
import { useParams } from "react-router-dom";
//route에서 "/movie/:id"를 사용하여 id를 인자로 받아오려면 useParams 필요
function Detail(){
  const { id } = useParams();
  const getMovie = async ()  => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect (()=>{
    getMovie();
  },[]);
  return <h1>Detail</h1>;
}

export default Detail;