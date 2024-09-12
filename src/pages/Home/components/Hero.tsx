import { IonIcon } from "@ionic/react";
import { calendarOutline, play, timeOutline } from "ionicons/icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">ARA . MOVIE</p>

          <h1 className="h1 hero-title">
            Unlimited <strong>Movie</strong>, TVs Shows, & More.
          </h1>

          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">PG 18</div>

              <div className="badge badge-outline">HD</div>
            </div>

            <div className="ganre-wrapper">
              <a href="#">Romance,</a>

              <a href="#">Drama</a>
            </div>

            <div className="date-time">
              <div>
                <IonIcon icon={calendarOutline} />

                <time dateTime="2022">2022</time>
              </div>

              <div>
                <IonIcon icon={timeOutline} />

                <time dateTime="PT128M">128 min</time>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">
            <IonIcon icon={play} />

            <span>Watch now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
