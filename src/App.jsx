import React from "react";
import { Routes, Route } from "react-router";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Favorites from "./pages/Favorites";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoritesProducts, setFavoritesProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://f070f08733d5b515.mokky.dev/cart",
      );
      const favoritesResponse = await axios.get(
        "https://f070f08733d5b515.mokky.dev/favorites",
      );
      const productsResponse = await axios.get(
        "https://f070f08733d5b515.mokky.dev/products",
      );

      setCartProducts(cartResponse.data);
      setFavoritesProducts(favoritesResponse.data);
      setProducts(productsResponse.data);
    }

    fetchData()
  }, []);

  const addToCart = async (obj) => {
    try {
      if (
        cartProducts.find((cartProduct) => Number(cartProduct.id) === Number(obj.id))
      ) {
        axios.delete(`https://f070f08733d5b515.mokky.dev/cart/${obj.id}`);
        setCartProducts((prev) =>
          prev.filter((cartProduct) => Number(cartProduct.id) !== Number(obj.id)),
        );
      } else {
        const { data } = await axios.post(
          "https://f070f08733d5b515.mokky.dev/cart",
          obj,
        );
        setCartProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка: " + error);
    }
  };

  const removeCartProduct = (id) => {
    axios.delete(`https://f070f08733d5b515.mokky.dev/cart/${id}`);
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const addToFavorite = async (obj) => {
    try {
      if (favoritesProducts.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://f070f08733d5b515.mokky.dev/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          "https://f070f08733d5b515.mokky.dev/favorites",
          obj,
        );
        setFavoritesProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное:" + error);
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Cart
          products={cartProducts}
          onClose={() => setCartOpened(false)}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
          removeCartProduct={removeCartProduct}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                cartProducts={cartProducts}
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                addToCart={addToCart}
                addToFavorite={addToFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoritesProducts={favoritesProducts}
                addToFavorite={addToFavorite}
              />
            }
          />
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
