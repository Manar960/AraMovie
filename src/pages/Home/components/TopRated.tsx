
import React from "react";
import m1 from "../../../assets/images/f1.jpg";
import m2 from "../../../assets/images/f2.jpg";
import m3 from "../../../assets/images/f3.jpg";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const TopRated = () => {
  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Top Rated
            </h2>

            <p className="card-text">
              Here are the most rated 
              movies and series 
            </p>
          </div>

          <div className="slider" data-slider>
            <ul className="slider-list" data-slider-container>
              {[
                {
                  title: "Project Silence",
                  rating: "10.0",
                  imgSrc: m1,
                  alt: "Sport",
                },
                {
                  title: "Escape",
                  rating: "9.8",
                  imgSrc: m2,
                  alt: "Travel",
                },
                {
                  title: "Black Out",
                  rating: "8.4",
                  imgSrc: m3,
                  alt: "Design",
                },
              ].map((topic, index) => (
                <li className="slider-item" key={index}>
                  <a href="#" className="slider-card">
                    <figure
                      className="slider-banner img-holder"
                      style={
                        { 
                          height: 618,
                        } as React.CSSProperties
                      }
                    >
                      <img
                        src={topic.imgSrc} 
                        width="300"
                        height="618"
                        loading="lazy"
                        alt={topic.alt}
                        className="img-cover"
                      />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">{topic.title}</span>
                      <p className="slider-subtitle">
                        {topic.rating} <IonIcon icon={star} />
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
