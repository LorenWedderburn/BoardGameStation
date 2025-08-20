import "./App.css";

import { Banner } from "./Banner";
import { Border } from "./Border";
import { EditorsChoice } from "./EditorsChoice";
import { GameChart } from "./GameChart";
import { Logo } from "./Logo";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export default App;

function App({
  gameBank,
  shoppingCart,
  setShoppingCart,
  chartGames,
  onAddToCart,
}) {
  return (
    <>
      <Logo shoppingCart={shoppingCart} />
      <NavigationBar
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
      <Banner />
      <EditorsChoice />
      <Border className="break-border" />
      <GameChart
        gameBank={gameBank}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        chartGames={chartGames}
        onAddToCart={onAddToCart}
      />
      <Footer />
    </>
  );
}
