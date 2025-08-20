import { Link, useLocation } from "react-router";

import "./NavigationBar.css";

export function NavigationBar({ shoppingCart, setShoppingCart }) {
  const location = useLocation();

  return (
    <div className="navigation">
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>Home</Link>
          {/* <a href="default.asp">Home</a> */}
        </li>
        <li className={location.pathname === "/Gallery" ? "active" : ""}>
          <Link to={"/Gallery"}>Gallery</Link>
        </li>
        <li className={location.pathname === "/Cart" ? "active" : ""}>
          <Link to={"/Cart"}>Cart</Link>
        </li>
        <li className={location.pathname === "/Reviews" ? "active" : ""}>
          <Link to={"/Reviews/Arcs"}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
