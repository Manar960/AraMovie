import Logo from "./Logo";
import { IonIcon } from "@ionic/react";

import {
  closeOutline,
  logoTwitter,
  logoFacebook,
  logoPinterest,
  logoYoutube,
  logoInstagram,
} from "ionicons/icons";
const Navbar = () => {
  return (
    <nav className="navbar" data-navbar>
      <div className="navbar-top">
        <Logo />
        <button className="menu-close-btn" data-menu-close-btn>
          <IonIcon icon={closeOutline} />
        </button>
      </div>

      <ul className="navbar-list">
        <li>
          <a href="./index.html" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            New episodes
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Series
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Movie
          </a>
        </li>
        <li>
          <a href="#" className="navbar-link">
            Tv Show
          </a>
        </li>
      </ul>

      <ul className="navbar-social-list">
        <li>
          <a href="#" className="navbar-social-link">
            <IonIcon icon={logoTwitter} />
          </a>
        </li>
        <li>
          <a href="#" className="navbar-social-link">
            <IonIcon icon={logoFacebook} />
          </a>
        </li>
        <li>
          <a href="#" className="navbar-social-link">
            <IonIcon icon={logoPinterest} />
          </a>
        </li>
        <li>
          <a href="#" className="navbar-social-link">
            <IonIcon icon={logoInstagram} />
          </a>
        </li>
        <li>
          <a href="#" className="navbar-social-link">
            <IonIcon icon={logoYoutube} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
