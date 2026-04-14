import React from "react";
import Card from "../components/Card";

function Favorites({favoritesProducts, addToFavorite}) {
  return (
    <section className="section favorites">
      <div className="container favorites__container ">
        <div className="section__top">
          <h2 className="section__title">Избранное</h2>
        </div>

        <ul className="products__list list-reset">
          {favoritesProducts
            .map((favoritesProduct) => (
              <li className="products__item" key={favoritesProduct.id}>
                <Card
                  favorited={true}
                  addToFavorite={() => addToFavorite(favoritesProduct)}
                  {...favoritesProduct}
                />
              </li>
            ))}
        </ul>

      </div>
    </section>
  );
}

export default Favorites;
