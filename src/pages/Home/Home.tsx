import Hero from "./components/Hero";
import "./components/Home.css";
import Shows from "./components/Shows";
import UpcomingMovies from "./components/UpcomingMovies";
import { movieData, asiaData, animeData } from "../../assets/data";
import News from "./components/News";
import Footer from "./components/Footer";
import TopRated from "./components/TopRated";

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <UpcomingMovies />
        <Shows title="Recently Added Shows" noBackground images={movieData} />
        <Shows title="Recently Added Movies" images={movieData} />
        <Shows title="Asian Shows" noBackground images={asiaData} />
        <Shows title="Anime" images={animeData} />
        <TopRated />
        <News />
        <Footer />
      </article>
    </main>
  );
};

export default Home;
