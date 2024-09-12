import { IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons";
import f1 from "../../../assets/images/upcoming-1.png";
import f2 from "../../../assets/images/upcoming-2.png";
import f3 from "../../../assets/images/upcoming-3.png";
import f4 from "../../../assets/images/upcoming-4.png";

const UpcomingMovies = () => {
  return (
    <section className="upcoming">
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Upcoming Shows</h2>
          </div>
        </div>

        <ul className="movies-list  has-scrollbar">
          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img src={f1} alt="The Northman movie poster" />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">The Northman</h3>
                </a>

                <time dateTime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="duration">
                  <IonIcon icon={timeOutline} />
                  <time dateTime="PT137M">137 min</time>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src={f2}
                    alt="Doctor Strange in the Multiverse of Madness movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">
                    Doctor Strange in the Multiverse of Madness
                  </h3>
                </a>

                <time dateTime="2022">2022</time>
              </div>

              <div className="card-meta">

                <div className="duration">
                  <IonIcon icon={timeOutline} />

                  <time dateTime="PT126M">126 min</time>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img src={f3} alt="Memory movie poster" />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Memory</h3>
                </a>

                <time dateTime="2022">2022</time>
              </div>

              <div className="card-meta">

                <div className="duration">
                  <IonIcon icon={timeOutline} />

                  <time dateTime="">2h</time>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src={f4}
                    alt="The Unbearable Weight of Massive Talent movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">
                    The Unbearable Weight of Massive Talent
                  </h3>
                </a>

                <time dateTime="2022">2022</time>
              </div>

              <div className="card-meta">

                <div className="duration">
                  <IonIcon icon={timeOutline} />

                  <time dateTime="PT107M">107 min</time>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UpcomingMovies;
