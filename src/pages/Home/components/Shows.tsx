import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
interface MovieData {
  src: string;
  alt: string;
  title: string;
  year: string;
  duration: string;
  rating: number;
}

interface ShowsProps {
  title: string;
  noBackground?: boolean;
  images: MovieData[]; 
}

const Shows: React.FC<ShowsProps> = ({ title, noBackground, images }) => {
  return (
    <section
      className="upcoming"
      style={{
        background: noBackground
          ? "none"
          : undefined,
      }}
    >
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <h2 className="h2 section-title">{title}</h2>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <img src={movie.src} alt={movie.alt} />
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">{movie.title}</h3>
                  </a>
                  <time dateTime={movie.year}>{movie.year}</time>
                </div>

                <div className="card-meta">
                  <div className="duration">
                    <IonIcon icon={timeOutline} />
                    <time dateTime={movie.duration}>
                      {movie.duration.includes("PT")
                        ? `${parseInt(
                            movie.duration.match(/\d+/)?.[0] || "0"
                          )} min`
                        : movie.duration}
                    </time>
                  </div>{" "}
                  <div className="rating">
                    <IonIcon icon={star} />
                    <data>{movie.rating}</data>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Shows;
