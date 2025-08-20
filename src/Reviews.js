import { Border } from "./Border";
import { Logo } from "./Logo";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { useParams } from "react-router";

import "./Reviews.css";

export default function Reviews({ gameBank, shoppingCart, onAddToCart }) {
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <Logo shoppingCart={shoppingCart} />
      <NavigationBar shoppingCart={shoppingCart} />
      <Border className="break-border" />
      <ReviewContent
        gameBank={gameBank}
        name={name}
        onAddToCart={onAddToCart}
      />
      <Border className="break-border" />
      <Footer />
    </>
  );
}

function ReviewContent({ gameBank, name, onAddToCart }) {
  return (
    <>
      {gameBank
        .filter((game) => game.name === name)
        .map((game) => (
          <div className="review-container" key={game.name}>
            <figure className="image-container">
              <img
                className={
                  game.stock >= 1 ? "review-image" : "review-image greyscale"
                }
                src={`${game.path}`}
                alt={game.name}
              />
              <figcaption className="caption-text">{game.name}</figcaption>
              <span>
                <label className="price-label">{`£${game.price}`}</label>
              </span>
              <span>
                <label className="price-label">{`${
                  game.stock >= 5 ? `5+ ` : game.stock
                } left in stock`}</label>
              </span>
              <button
                className={game.stock >= 1 ? "review-btn" : "hidden"}
                onClick={() => onAddToCart(game.name)}
              >
                Add to cart
              </button>
            </figure>

            <div className="review-content">
              <label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque facilisis varius nibh, eget efficitur dui. Donec
                ultrices dapibus massa vitae suscipit. Curabitur fermentum
                imperdiet nulla, mollis faucibus tortor imperdiet ac. Vestibulum
                nec consectetur leo. Nullam id tempor nisl, non maximus ipsum.
                Etiam ultrices placerat risus, ultrices tempor lorem lobortis
                ac. Mauris commodo blandit velit, a faucibus ante posuere
                rhoncus.
                <br />
                Integer tincidunt a metus sit amet bibendum. Phasellus sit amet
                auctor neque. Duis aliquet tristique gravida. Vestibulum auctor
                sollicitudin consectetur. Sed varius leo id elit aliquet
                venenatis. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Sed accumsan ligula laoreet,
                tristique quam non, laoreet felis.
                <br />
                Proin felis erat, ullamcorper ut ligula at, lacinia consequat
                nibh. Mauris id imperdiet risus. Etiam elementum vitae eros in
                fringilla. Morbi ac erat eros. Praesent sed quam nisl. Cras
                porta sapien posuere, egestas mauris sed, gravida velit. Integer
                et nunc ullamcorper, sodales felis eget, tincidunt risus. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                facilisis varius nibh, eget efficitur dui. Donec ultrices
                dapibus massa vitae suscipit. Curabitur fermentum imperdiet
                nulla, mollis faucibus tortor imperdiet ac. Vestibulum nec
                consectetur leo. Nullam id tempor nisl, non maximus ipsum. Etiam
                ultrices placerat risus, ultrices tempor lorem lobortis ac.
                Mauris commodo blandit velit, a faucibus ante posuere rhoncus.
                <br />
                Integer tincidunt a metus sit amet bibendum. Phasellus sit amet
                auctor neque. Duis aliquet tristique gravida. Vestibulum auctor
                sollicitudin consectetur. Sed varius leo id elit aliquet
                venenatis. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Sed accumsan ligula laoreet,
                tristique quam non, laoreet felis.
                <br />
                Proin felis erat, ullamcorper ut ligula at, lacinia consequat
                nibh. Mauris id imperdiet risus. Etiam elementum vitae eros in
                fringilla. Morbi ac erat eros. Praesent sed quam nisl. Cras
                porta sapien posuere, egestas mauris sed, gravida velit. Integer
                et nunc ullamcorper, sodales felis eget, tincidunt risus. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                facilisis varius nibh, eget efficitur dui. Donec ultrices
                dapibus massa vitae suscipit. Curabitur fermentum imperdiet
                nulla, mollis faucibus tortor imperdiet ac. Vestibulum nec
                consectetur leo. Nullam id tempor nisl, non maximus ipsum. Etiam
                ultrices placerat risus, ultrices tempor lorem lobortis ac.
                Mauris commodo blandit velit, a faucibus ante posuere rhoncus.
                <br />
                Integer tincidunt a metus sit amet bibendum. Phasellus sit amet
                auctor neque. Duis aliquet tristique gravida. Vestibulum auctor
                sollicitudin consectetur. Sed varius leo id elit aliquet
                venenatis. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Sed accumsan ligula laoreet,
                tristique quam non, laoreet felis.
                <br />
                Proin felis erat, ullamcorper ut ligula at, lacinia consequat
                nibh. Mauris id imperdiet risus. Etiam elementum vitae eros in
                fringilla. Morbi ac erat eros. Praesent sed quam nisl. Cras
                porta sapien posuere, egestas mauris sed, gravida velit. Integer
                et nunc ullamcorper, sodales felis eget, tincidunt risus.
              </label>
            </div>
          </div>
        ))}
    </>
  );
}
