import "./Footer.css";

import {
  faXTwitter,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationBar } from "./NavigationBar";

export function Footer() {
  return (
    <>
      <footer>
        <p className="footer-section-social">
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </a>
          <a href="https://www.github.com/">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
        </p>
        <NavigationBar />
      </footer>
    </>
  );
}
