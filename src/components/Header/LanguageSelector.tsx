import { IonIcon } from "@ionic/react";
import { globeOutline } from "ionicons/icons";

const LanguageSelector = () => {
  return (
    <div className="lang-wrapper">
      <label htmlFor="language">
        <IonIcon icon={globeOutline} />
      </label>
      <select name="language" id="language">
        <option value="en">EN</option>
        <option value="au">AU</option>
        <option value="ar">AR</option>
        <option value="tu">TU</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
