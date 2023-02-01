import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const found = movies.find((el) => el.id == id);
  console.log(found.id);
  return (
    <>
      <div className="vid">
        <Card style={{ height:'20rem', width: "35rem" }}>
          <iframe
            width="560" 
            height="315"
            src={`https://www.youtube.com/embed/${found.vid}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Card.Body>
            <Card.Title>{found.title}</Card.Title>
            <Card.Text>{found.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default MovieDescription;
