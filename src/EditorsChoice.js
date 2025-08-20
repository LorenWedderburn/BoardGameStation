import "./EditorsChoice.css";
import { Link } from "react-router";

export function EditorsChoice() {
  return (
    <div id="editors-choice">
      <div id="editors-choice-left" className="editors-choice-box">
        <Link
          to={`/Reviews/${"John Company 2nd Edition"}`}
          name={"John Company"}
        >
          <img src="Images\JohnCompany.jpg" alt="John Company" />
        </Link>
        <label className="editor-title">John Company</label>
        <label>Pre-Order Now</label>
        <button className="editors-choice-btn">Pre-Order!</button>
      </div>
      <div id="editors-choice-right" className="editors-choice-box">
        <Link to={`/Reviews/${"Seti"}`} name={"SETI"}>
          <img src="Images/SetiGallery.jpg" alt="SETI"></img>
        </Link>
        <label className="editor-title">SETI</label>
        <label>Buy Now</label>
        <button className="editors-choice-btn">Buy Now!</button>
      </div>
    </div>
  );
}
