import { useState } from "react";
import "./App.css";
import { Movie } from "./components/Movie";
import { MovieForm } from "./components/MovieForm";

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

  const [totalMovies, setTotalMovies] = useState(movies.length);

  const removeMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
    setTotalMovies(newMovies.length);
  };

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setTotalMovies((prevTotal) => prevTotal + 1);
  };

  return (
    <>
      <h1>Movie List</h1>
      <p>Total in list: {totalMovies}</p>
      <MovieForm addMovie={addMovie} />
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
