import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="divider"></div>

          <div className="quicklink-wrapper">
            <ul className="quicklink-list">
              <li>
                <a href="#" className="quicklink-link">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="quicklink-link">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="quicklink-link">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="quicklink-link">
                  Privacy
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">Manar</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
