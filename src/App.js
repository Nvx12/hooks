import "./App.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Pulp Fiction",
      description:
        "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangsters wife, a boxer and two small-time criminals.",
      image:
        "https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg",
      rating: 4,
      id: Math.random(),
    },
    {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      image:
        "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg",
      rating: 5,
      id: Math.random(),
    },
    {
      title: "Reservoir Dogs",
      description:
        "Six criminals, hired to steal diamonds, do not know each other's true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: 3,
      id: Math.random(),
    },
    {
      title: "Django Unchained",
      description:
        "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
      rating: 4,
      id: Math.random(),
    },
  ]);

  const [titre, setTitre] = useState("");
  const [etoile, setEtoile] = useState(0);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="button"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Filter setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile} /> 
        <AddMovie setMovies={setMovies} movies={movies}/>
      </div>
      <MovieList movies={movies} titre={titre} etoile={etoile} setMovies={setMovies} />
    </>
  );
}

export default App;
