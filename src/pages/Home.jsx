import React from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";

function Home() {
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    axios.get("https://f070f08733d5b515.mokky.dev/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  return (
    <section className="section products">
      <div className="products__container container">
        <div className="section__top">
          <h2 className="section__title">
            {searchValue ? "Поиск по запросу: " + searchValue : "Все кроссовки"}
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
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </section>
  );
}

export default Home;
