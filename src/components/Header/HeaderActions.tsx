import LanguageSelector from "./LanguageSelector";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
const HeaderActions = () => {
  return (
    <div className="header-actions">
      <button className="search-btn">
        <IonIcon icon={searchOutline} />
      </button>
      <LanguageSelector />
      <button className="btn btn-primary">Sign in</button>
    </div>
  );
};

export default HeaderActions;
