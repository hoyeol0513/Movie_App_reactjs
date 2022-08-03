import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.moudule.css";

function Movie({id, coverImg,title, year, summary, genres }){
  return( 
  <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie_img} />
    <h2 className={styles.movie_title}>
      <Link to={`/movie/${id}`}>{title}</Link></h2>
    {/* 
    p = paragraph 
    summary가 길면 235 길이 전까지 자름.
    => 그 뒤는 더보기 버튼을 넣어도 될듯 ? 
    */}
    <h3 className={styles.movie_year}>{year}</h3>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary }</p>
    <ul className={styles.movie_genres}>
      {genres.map((g)=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
  );
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;