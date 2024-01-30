import { useState } from "react";
import "./App.css";
import { Movie } from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Titanic",
      released: "1997",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar",
      released: "2009",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar: der Weg des Wassers",
      released: "2023",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar: der Weg des Wassers",
      released: "2023",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar: der Weg des Wassers",
      released: "2023",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar: der Weg des Wassers",
      released: "2023",
      director: "James Cameron",
      favorite: false,
    },
    {
      title: "Avatar: der Weg des Wassers",
      released: "2023",
      director: "James Cameron",
      favorite: false,
    },
  ]);

  const removeMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  return (
    <>
      {" "}
      <h1>Movie List</h1>
      <div className="favs">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            index={index}
            title={movie.title}
            released={movie.released}
            director={movie.director}
            favorite={movie.favorite}
            removeMovie={removeMovie}
          />
        ))}
      </div>
    </>
  );
}

export default App;
