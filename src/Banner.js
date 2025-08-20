import "./Banner.css";
import { Link } from "react-router";

import { Border } from "./Border";

export function Banner() {
  return (
    <div>
      <Border className="banner-border">
        Buy 3, get 3% off - use code BGStation·Buy 5, get 5% off - use code BG
        Station5
      </Border>
      <BannerContent />
      <Border className="banner-border">
        Next day delivery, UK's biggest game store, new releases, 5 star
        reputation
      </Border>
    </div>
  );
}

function BannerContent() {
  return (
    <div>
      <Link to={`/Reviews/${"Tammany Hall"}`} name={"Tammany Hall"}>
        <img
          className="banner-content-image"
          src="\Images\TammanyhallBanner.jpg"
          alt="Tammany Hall"
        />
      </Link>
    </div>
  );
}
