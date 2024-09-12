import Hero from "./components/Hero";
import "./components/Home.css";
import UpcomingMovies from "./components/UpcomingMovies";



const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <UpcomingMovies />
      </article>
    </main>
  );
};

export default Home;
