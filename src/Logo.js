import "./Logo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export function Logo({ shoppingCart }) {
  return (
    <div id="logo-container">
      <Link to={"/"}>
        <img
          id="logo-image"
          src="\Icons\BoardGameStationLogo.png"
          alt="logo"
        ></img>
      </Link>
      <label id="logo-title">Board Game Station </label>
      <div>
        <Link to="/Cart" className="logo-basket">
          <FontAwesomeIcon icon={faShoppingBasket} size="xl" />
          <label className="logo-cart-total">{shoppingCart.length}</label>
        </Link>
      </div>
    </div>
  );
}
