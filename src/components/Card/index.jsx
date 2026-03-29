import styles from './components/Card/card.modules.scss'

function Card(props) {
  console.log(props)
  return (
    <article className="products__card card">
      <button className="card__add-favorite btn-reset">
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
        src={props.imageUrl}
        alt={props.title}
      />
      <h3 className="card__title">{props.title}</h3>
      <div className="card__bottom">
        <div className="card__price">
          <span className="card__price-title">Цена:</span>
          <span className="card__price-number">{props.price} ₽</span>
        </div>
        <button className="card__button-add btn-reset">
          <img src="/images/icons/plus.svg" alt="Добавить в корзину" />
        </button>
      </div>
    </article>
  );
}

export default Card;
