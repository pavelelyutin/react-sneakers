import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Favorites from "./pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Cart
          products={cartProducts}
          onClose={() => setCartOpened(false)}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
