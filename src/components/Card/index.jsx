import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  addToCart,
  addToFavorite,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    addToCart(id, title, imageUrl, price);
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    addToFavorite(id, title, imageUrl, price);
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="products__card card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
          <rect x="0" y="115" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="135" rx="5" ry="5" width="90" height="15" />
          <rect x="0" y="170" rx="5" ry="5" width="80" height="30" />
          <rect x="120" y="170" rx="5" ry="5" width="30" height="30" />
        </ContentLoader>
      ) : (
        <>
          <button
            className="card__add-favorite btn-reset"
            onClick={onClickFavorite}
          >
            <img
              className="card__favorite"
              src={
                isFavorite
                  ? "/images/icons/favorite-active.svg"
                  : "/images/icons/favorite-unactive.svg"
              }
              alt="Добавить в избранное"
            />
          </button>
          <img
            className="card__image"
            width="133"
            height="112"
            src={imageUrl}
            alt={title}
          />
          <h3 className="card__title">{title}</h3>
          <div className="card__bottom">
            <div className="card__price">
              <span className="card__price-title">Цена:</span>
              <span className="card__price-number">{price} ₽</span>
            </div>
            <button
              className="card__button-add btn-reset"
              onClick={onClickPlus}
            >
              <img
                src={
                  isAdded
                    ? "/images/icons/checked.svg"
                    : "/images/icons/plus.svg"
                }
                alt="Добавить в корзину"
              />
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default Card;
