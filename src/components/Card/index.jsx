import React from 'react';
import styles from './Card.scss'

function Card({addToFavorite, addToCart, title, imageUrl, price}) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    addToCart()
    setIsAdded(!isAdded)
  }

  React.useEffect(() => {
    console.log('Переменная изменилась')
  }, [isAdded])

  return (
    <article className="products__card card">
      <button className="card__add-favorite btn-reset" onClick={addToFavorite}>
        <img
          className="card__favorite"
          src="/images/icons/favorite-unactive.svg"
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
        <button className="card__button-add btn-reset" onClick={onClickPlus}>
          <img src={isAdded ? '/images/icons/checked.svg': '/images/icons/plus.svg'} alt="Добавить в корзину" />
        </button>
      </div>
    </article>
  );
}

export default Card;
