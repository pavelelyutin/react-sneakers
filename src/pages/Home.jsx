import React from "react";
import Card from "../components/Card";

function Home({
  products,
  cartProducts,
  searchValue,
  setSearchValue,
  onChangeSearchValue,
  addToFavorite,
  addToCart,
}) {

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
        <ul className="products__list list-reset">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((product) => (
              <li className="products__item" key={product.id}>
                <Card
                  addToFavorite={() => addToFavorite(product)}
                  addToCart={() => addToCart(product)}
                  {...product}
                  added={cartProducts.some(cartProduct => Number(cartProduct.id) === Number(product.id))}
                />
              </li>
            ))}
        </ul>

      </div>
    </section>
  );
}

export default Home;
