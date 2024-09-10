import Logo from "./Logo";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";
import { IonIcon } from "@ionic/react";
import { reorderTwo } from "ionicons/icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>
        <Logo />
        <HeaderActions />
        <button className="menu-open-btn" data-menu-open-btn>
          <IonIcon icon={reorderTwo} />
        </button>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
