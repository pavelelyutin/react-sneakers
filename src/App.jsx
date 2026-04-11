import React from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartProducts, setCartProducts] = React.useState([]);

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
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <main>
        {/* products */}
        <section className="products">
          <div className="products__container container">
            <div className="products__top">
              <h2 className="products__title">
                {searchValue
                  ? "Поиск по запросу: " + searchValue
                  : "Все кроссовки"}
              </h2>
              <div className="products__search search">
                <img
                  className="search__icon"
                  src="/images/icons/search.svg"
                  alt="Поиск кроссовок"
                />
                <input
                  className="search__input"
                  type="text"
                  placeholder="Поиск..."
                  value={searchValue}
                  onChange={onChangeSearchValue}
                />
                {searchValue && (
                  <button
                    className="search__close btn-reset"
                    onClick={() => setSearchValue("")}
                  >
                    <img src="/images/icons/remove.svg" alt="Очистить поиск" />
                  </button>
                )}
              </div>
            </div>
            <ProductsList
              searchValue={searchValue}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
