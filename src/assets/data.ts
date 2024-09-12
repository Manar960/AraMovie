// src/data/movieData.ts
import f4 from "../assets/images/upcoming-4.png";
import f1 from "../assets/images/series-1.png";
import f2 from "../assets/images/series-2.png";
import f3 from "../assets/images/series-3.png";
import f5 from "../assets/images/movie-1.png";
import f6 from "../assets/images/movie-2.png";
import f7 from "../assets/images/movie-3.png";
import f8 from "../assets/images/movie-4.png";
import m1 from "../assets/images/f1.jpg";
import m2 from "../assets/images/f2.jpg";
import m3 from "../assets/images/f3.jpg";
import m4 from "../assets/images/f4.jpg";
import m5 from "../assets/images/f5.jpg";
import m6 from "../assets/images/m6.jpg";
import h from "../assets/images/images.jpg";
import aot from "../assets/images/aot.jpg";
import onepaice from "../assets/images/onepice.jpg";
import Mashle from "../assets/images/Mashle.jpg";
import Bungou from "../assets/images/bogo.jpg";
import SoloLeveling from "../assets/images/Solo Leveling.jpg";

export interface MovieData {
  src: string;
  alt: string;
  title: string;
  year: string;
  duration: string;
  rating: number;
}

export const movieData: MovieData[] = [
  {
    src: f4,
    alt: "The Northman movie poster",
    title: "The Northman",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: f1,
    alt: "Doctor Strange movie poster",
    title: "Doctor Strange in the Multiverse of Madness",
    year: "2022",
    duration: "PT126M",
    rating: 8.5,
  },
  {
    src: f2,
    alt: "Memory movie poster",
    title: "Memory",
    year: "2022",
    duration: "2h",
    rating: 8.5,
  },
  {
    src: f3,
    alt: "The Unbearable Weight of Massive Talent movie poster",
    title: "The Unbearable Weight of Massive Talent",
    year: "2022",
    duration: "PT107M",
    rating: 8.5,
  },
  {
    src: f5,
    alt: "Movie 5 poster",
    title: "Sonic the Hedgehog 2",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: f6,
    alt: "Movie 6 poster",
    title: "Morbius",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: f7,
    alt: "Movie 7 poster",
    title: "The Adam Project",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: f8,
    alt: "Movie 8 poster",
    title: "Free Guy",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
];

export const asiaData: MovieData[] = [
  {
    src: m1,
    alt: "Project Silence poster",
    title: "Project Silence",
    year: "2022",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: m2,
    alt: "Escape poster",
    title: "Escape",
    year: "2022",
    duration: "PT126M",
    rating: 8.5,
  },
  {
    src: m3,
    alt: "Black Out poster",
    title: "Black Out",
    year: "2022",
    duration: "2h",
    rating: 8.5,
  },
  {
    src: m4,
    alt: "The Tyrant poster",
    title: "The Tyrant",
    year: "2024",
    duration: "PT107M",
    rating: 9.5,
  },
  {
    src: m5,
    alt: "Movie 5 poster",
    title: "Your Honor",
    year: "2024",
    duration: "PT137M",
    rating: 8.5,
  },
  {
    src: m6,
    alt: "Sweet Home poster",
    title: "Sweet Home",
    year: "2024",
    duration: "PT137M",
    rating: 8.5,
  },
];

export const animeData: MovieData[] = [
  {
    src: h,
    alt: "Hunter x Hunter",
    title: "Hunter x Hunter",
    year: "2015",
    duration: "PT137M",
    rating: 10.0,
  },
  {
    src: aot,
    alt: "Shingeki no Kyojin",
    title: "Shingeki no Kyojin",
    year: "2010",
    duration: "PT126M",
    rating: 10000.0,
  },
  {
    src: onepaice,
    alt: "One Piece",
    title: "One Piece",
    year: "2022",
    duration: "2h",
    rating: 5.5,
  },
  {
    src: Mashle,
    alt: "Mashle",
    title: "Mashle",
    year: "2024",
    duration: "PT107M",
    rating: 9.5,
  },
  {
    src: SoloLeveling,
    alt: "Solo Leveling",
    title: "Solo Leveling",
    year: "2024",
    duration: "PT137M",
    rating: 20.5,
  },
  {
    src: Bungou,
    alt: "Bungou Stray Dogs",
    title: "Bungou Stray Dogs",
    year: "2024",
    duration: "PT137M",
    rating: 10.0,
  },
];
