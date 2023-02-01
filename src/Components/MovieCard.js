import { Button, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
const MovieCard = ({ el, movies, setMovies }) => {
  const [showMore, setShowMore] = useState(false);
  const handleDelete = (a) => setMovies(movies.filter((el) => el.id !== a));
  return (
    <Card style={{ width: "18rem" }}>
      <LinkContainer to={`/MovieDescription/${el.id}`}>
        <Card.Img
          variant="top"
          src={el.image}
          style={{ height: "420px", width: "285px" }}
        />
      </LinkContainer>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {showMore ? el.description : `${el.description.substring(0, 45)}`}
          <button className="btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show more"}
          </button>
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
        <br />
        <Button variant="danger" onClick={() => handleDelete(el.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
