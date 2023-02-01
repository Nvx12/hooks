import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import { useState } from "react";
import Filter from "./Components/Filter";
import NavMovies from "./Components/NavMovies";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieDescription from "./Components/MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Pulp Fiction",
      description:
        "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangsters wife, a boxer and two small-time criminals.",
      image:
        "https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg",
      rating: 4,
      vid: "tGpTpVyI_OQ",
      id: Math.random(),
    },
    {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      image: "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg",
      rating: 5,
      vid: "zSWdZVtXT7E",
      id: Math.random(),
    },
    {
      title: "Reservoir Dogs",
      description:
        "Six criminals, hired to steal diamonds, do not know each other's true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: 3,
      vid: "vayksn4Y93A",
      id: Math.random(),
    },
    {
      title: "Django Unchained",
      description:
        "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
      rating: 4,
      vid: "0fUCuvNlOCg",
      id: Math.random(),
    },
  ]);

  const [titre, setTitre] = useState("");
  const [etoile, setEtoile] = useState(0);

  return (
    <>
      <NavMovies />
      <div
        className="button"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Filter
          setTitre={setTitre}
          setEtoile={setEtoile}
          titre={titre}
          etoile={etoile}
        />
        <AddMovie setMovies={setMovies} movies={movies} />
      </div>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/MovieList"
          element={
            <MovieList
              movies={movies}
              titre={titre}
              etoile={etoile}
              setMovies={setMovies}
              setTitre={setTitre}
              setEtoile={setEtoile}
            />
          }
        />
        <Route
          path="/MovieDescription/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </>
  );
}

export default App;
