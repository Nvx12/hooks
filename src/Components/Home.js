import { Link } from "react-router-dom";
import logo from "../movies.jpg";

const Home = () => {
  return (
    <>
    <section id="hero">
    <div className="hero-container" data-aos="fade-up">
      <h1>Welcome to movies app</h1>
      <Link to='/MovieList'><a className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a></Link>
     
    </div>
  </section>
    </>
  );
};

export default Home;
