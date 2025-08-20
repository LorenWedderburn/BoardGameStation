import "./GameChart.css";
import { Link } from "react-router";

export function GameChart({
  gameBank,
  shoppingCart,
  setShoppingCart,
  chartGames,
  onAddToCart,
}) {
  return (
    <>
      <div id="chart-container">
        {chartGames.map((game) => (
          <ChartItem
            onAddToCart={() => onAddToCart(game.name)}
            name={game.name}
            imagePath={game.path}
            price={game.price}
            stock={game.stock}
            key={game.id}
          />
        ))}
      </div>
    </>
  );
}
function ChartItem({ name, imagePath, price, stock, onAddToCart }) {
  if (stock >= 1) {
    return (
      <div className="chart-item">
        <Link to={`/Reviews/${name}`} name={name}>
          <img className="chart-image" src={imagePath} alt={name} />
        </Link>
        <label className="chart-name">{name}</label>
        <button className="chart-btn" onClick={() => onAddToCart(name)}>
          Add to basket
        </button>
        <label className="chart-stock">{`${
          stock >= 5 ? `5+ ` : stock
        } left in stock`}</label>
        <label className="chart-price">{`£${price}`}</label>
      </div>
    );
  } else {
    return (
      <div className="chart-item">
        <Link to={`/Reviews/${name}`} name={name}>
          <img className="chart-image greyscale" src={imagePath} alt={name} />
        </Link>
        <label className="chart-name">{name}</label>
        <button className="hidden" onClick={() => onAddToCart(name)}>
          Add to basket
        </button>
        <label className="chart-stock">{`${
          stock >= 5 ? `5+ ` : stock
        } left in stock`}</label>
        <label className="chart-price">{`£${price}`}</label>
      </div>
    );
  }
}
