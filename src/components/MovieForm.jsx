// MovieForm.jsx
import { useState } from "react";
import styles from "./MovieForm.module.css";

export function MovieForm({ addMovie }) {
  const [formData, setFormData] = useState({
    title: "",
    released: "",
    director: "",
  });
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(formData);
    setFormData({ title: "", released: "", director: "" });
    setFormVisible(false); // Hide the form after submitting
  };

  const toggleFormVisibility = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button className={styles.addButton} onClick={toggleFormVisibility}>
        Add Movie
      </button>
      {formVisible && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="released">Released</label>
            <input
              type="text"
              id="released"
              name="released"
              value={formData.released}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="director">Director</label>
            <input
              type="text"
              id="director"
              name="director"
              value={formData.director}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.submit} type="submit">
            Add to Favorites
          </button>
        </form>
      )}
    </div>
  );
}
