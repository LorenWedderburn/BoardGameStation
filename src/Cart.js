import "./Cart.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { Border } from "./Border";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { NavigationBar } from "./NavigationBar";

function Cart({
  shoppingCart,
  gameBank,
  setGameBank,
  increaseGameStock,
  decreaseGameStock,
  deleteCartItem,
}) {
  const [sortedCart, setSortedCart] = useState([]);

  useEffect(() => {
    const sortedGames = shoppingCart.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    let gamesList = Object.entries(sortedGames);
    const newList = gamesList.map((game) => {
      const thisGame = gameBank.find((gameBank) => gameBank.name === game[0]);
      return { ...game, totalPrice: thisGame.price * game[1] };
    });
    setSortedCart(newList);
  }, [shoppingCart, setSortedCart, gameBank]);

  return (
    <>
      <Logo shoppingCart={shoppingCart} />
      <NavigationBar shoppingCart={shoppingCart} />
      <Border className="break-border" />
      <ShoppingCart
        shoppingCart={shoppingCart}
        sortedCart={sortedCart}
        setSortedCart={setSortedCart}
        gameBank={gameBank}
        setGameBank={setGameBank}
        increaseGameStock={increaseGameStock}
        decreaseGameStock={decreaseGameStock}
        deleteCartItem={deleteCartItem}
      />
      <CartTotal sortedCart={sortedCart} gameBank={gameBank} />
      <Border className="break-border" />
      <Footer />
    </>
  );
}

function ShoppingCart({
  shoppingCart,
  sortedCart,
  setSortedCart,
  gameBank,
  setGameBank,
  increaseGameStock,
  decreaseGameStock,
  deleteCartItem,
}) {
  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className="cart-container">
          <div>
            {sortedCart.map((game) => {
              const gameImage = gameBank.find(
                (gameFromBank) => game[0] === gameFromBank.name
              );
              return (
                <CartItem
                  name={game[0]}
                  amount={game[1]}
                  path={gameImage.path}
                  key={game[0]}
                  increaseGameStock={increaseGameStock}
                  decreaseGameStock={decreaseGameStock}
                  deleteCartItem={deleteCartItem}
                  gameBank={gameBank}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="cart-container-empty">
          <label>Shopping cart is empty</label>
        </div>
      )}
    </>
  );
}

function CartItem({
  name,
  amount,
  path,
  increaseGameStock,
  decreaseGameStock,
  deleteCartItem,
  gameBank,
}) {
  const thisGame = gameBank.find((game) => name === game.name);
  const n = thisGame.price * amount;
  const price = n.toFixed(2);

  return (
    <div className="cart-item">
      <Link to={`/Reviews/${name}`} name={name}>
        <img src={path} alt="name" />
      </Link>
      <label className="cart-item-name">{name}</label>
      <label className="cart-item-name">{`£${price}`}</label>
      <div>
        <button onClick={() => decreaseGameStock(name)}>-</button>
        <label>{amount}</label>
        <button onClick={() => increaseGameStock(name)}>+</button>
        <FontAwesomeIcon
          icon={faTrashCan}
          size="xl"
          onClick={() => deleteCartItem(name)}
        />
      </div>
    </div>
  );
}

function CartTotal({ gameBank, sortedCart }) {
  let grandTotal = 0;
  sortedCart.forEach((game) => {
    grandTotal += game.totalPrice;
  });

  return (
    <div className="cart-total-container">
      <label>{`Total: £${grandTotal.toFixed(2)}`}</label>
    </div>
  );
}

export default Cart;
