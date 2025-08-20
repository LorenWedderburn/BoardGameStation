import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Cart from "./Cart";
import { gameData, chartGameData } from "./data/data";

export default function AppEntry() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [gameBank, setGameBank] = useState([...gameData]);
  const [chartGames, setChartGames] = useState([...chartGameData]);

  function handleAddToCart(name) {
    setShoppingCart([...shoppingCart, name]);

    const updatedBank = gameBank.map((game) => {
      if (game.name !== name) {
        return game;
      } else {
        return {
          ...game,
          stock: game.stock - 1,
        };
      }
    });
    setGameBank(updatedBank);
    updateChart(updatedBank);
  }

  function increaseGameStock(gameName) {
    const updateBank = gameBank.map((game) => {
      if (game.name !== gameName) {
        return game;
      } else if (game.stock <= 0) {
        alert(`${gameName} is no longer in stock`);
        return game;
      } else {
        setShoppingCart([...shoppingCart, gameName]);
        return {
          ...game,
          stock: game.stock - 1,
        };
      }
    });
    setGameBank(updateBank);
    updateChart(updateBank);
  }

  function decreaseGameStock(gameName) {
    const indexGame = shoppingCart.findIndex((game) => game === gameName);
    const updateCart = shoppingCart.toSpliced(indexGame, 1);

    const updateBank = gameBank.map((game) => {
      if (game.name !== gameName) {
        return game;
      } else {
        setShoppingCart(updateCart);
        return {
          ...game,
          stock: game.stock + 1,
        };
      }
    });
    setGameBank(updateBank);
    updateChart(updateBank);
  }

  function deleteCartItem(gameName) {
    const emptiedCart = shoppingCart.filter((game) => game === gameName);
    const updateCart = shoppingCart.filter((game) => game !== gameName);

    const updateBank = gameBank.map((game) => {
      if (game.name !== gameName) {
        return game;
      } else {
        setShoppingCart(updateCart);
        return {
          ...game,
          stock: game.stock + emptiedCart.length,
        };
      }
    });
    setGameBank(updateBank);
    updateChart(updateBank);
  }

  function updateChart(updatedBank) {
    const newChartGames = chartGames.map((game) => {
      const matchingGameFromBank = updatedBank.find(
        (gameFromBank) => game.name === gameFromBank.name
      );
      if (matchingGameFromBank === null) {
        console.log("Blarg");
      }
      return matchingGameFromBank;
    });
    setChartGames(newChartGames);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          gameBank={gameBank}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          chartGames={chartGames}
          onAddToCart={handleAddToCart}
        />
      ),
    },
    {
      path: "/Gallery",
      element: (
        <Gallery
          gameBank={gameBank}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      ),
    },
    {
      path: "/Reviews/:name",
      element: (
        <Reviews
          gameBank={gameBank}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          onAddToCart={handleAddToCart}
        />
      ),
    },
    {
      path: "/Cart",
      element: (
        <Cart
          gameBank={gameBank}
          setGameBank={setGameBank}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          increaseGameStock={increaseGameStock}
          decreaseGameStock={decreaseGameStock}
          deleteCartItem={deleteCartItem}
        />
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}
