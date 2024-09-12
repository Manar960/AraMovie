import { IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons";
import blog1 from "../../../assets/images/swhome.jpg";
import blog2 from "../../../assets/images/Solo Leveling.jpg";
import blog3 from "../../../assets/images/wish.jpg";
import blog4 from "../../../assets/images/openh.jpg";

const News = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Latest News</h2>
          </div>
        </div>
        <ul className="blog-list">
          <li>
            <div className="blog-card large">
              <figure className="card-banner">
                <img
                  src={blog1}
                  width="644"
                  height="363"
                  loading="lazy"
                  alt="Godaddy user flow solution..."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">
                    Development
                  </a>

                  <a href="#" className="publish-date">
                    <IonIcon icon={timeOutline} />

                    <span className="span">July 22, 2022</span>
                  </a>
                </div>

                <h3>
                  <a href="#" className="card-title">
                    Sweet Home is back for its third season
                  </a>
                </h3>

                <p className="card-text">
                  It is based on the Naver webtoon of the same name by Kim
                  Carnby and Hwang Young-chan, which recorded over 2.1 billion
                  net views. The first season was released on Netflix on
                  December 18, 2020.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog2}
                  width="202"
                  height="162"
                  loading="lazy"
                  alt="Godaddy user flow solution for every individual"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">
                    Development
                  </a>

                  <a href="#" className="publish-date">
                    <IonIcon icon={timeOutline} aria-hidden />

                    <span className="span">July 21, 2020</span>
                  </a>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Solo Leveling break records.
                  </a>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog3}
                  width="202"
                  height="162"
                  loading="lazy"
                  alt="Business solution for every individual"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">
                    Development
                  </a>

                  <a href="#" className="publish-date">
                    <IonIcon icon={timeOutline} aria-hidden />

                    <span className="span">July 21, 2020</span>
                  </a>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Disney has released a new movie.
                  </a>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog4}
                  width="202"
                  height="162"
                  loading="lazy"
                  alt="How to gain pro experience ar figma update version"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">
                    Development
                  </a>

                  <a href="#" className="publish-date">
                    <IonIcon icon={timeOutline} aria-hidden />

                    <span className="span">July 21, 2020</span>
                  </a>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Oppenheimer best selling movie
                  </a>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
