import { useState } from "react";
import styles from "./Movies.module.css";

export function Movie({
  index,
  title,
  released,
  director,
  favorite,
  removeMovie,
}) {
  const [fav, setFav] = useState(favorite);
  const handleFav = () => {
    setFav((prevFav) => !prevFav);
  };

  return (
    <div className={styles.movie}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.director}>{director}</p>
      <h3 className={styles.year}>{released}</h3>

      <button
        onClick={handleFav}
        className={fav ? `${styles["favbtn-active"]}` : `${styles["favbtn"]}`}
      >
        <i className={fav ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
      </button>
      <button onClick={() => removeMovie(index)} className={styles.rmbtn}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
