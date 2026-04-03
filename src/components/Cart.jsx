function Cart({onClose, products = []}) {

  return (
    <div className="cart">
      <div className="cart__drawer">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <button className="cart__close btn-reset" onClick={onClose}>
            <img src="/images/icons/remove.svg" alt="Закрыть корзину" />
          </button>
        </div>

        <ul className="cart__list list-reset">
          {products.map(product => (
          <li className="cart__item" key={product.id}>
            <article className="cart__card cart-card">
              <img
                width={70}
                src={product.imageUrl}
                alt={product.title}
                className="cart-card__image"
              />
              <div className="cart-card__info">
                {" "}
                <h3 className="cart-card__title">
                  {product.title}
                </h3>
                <span className="cart-card__price">{product.price} ₽</span>
              </div>

              <button className="cart-card__remove btn-reset" >
                <img src="/images/icons/remove.svg" alt="Удалить товар" />
              </button>
            </article>
          </li>
          ))}
        </ul>

        <div className="cart__bottom">
          <div className="cart__info">
            <div className="cart__total">
              <div className="cart__price">
                <span>Итого:</span>
                <strong>21 498 ₽</strong>
              </div>
              <div className="cart__tax">
                <span>Налог 13%:</span>
                <strong>1074 ₽</strong>
              </div>
            </div>
          </div>
          <button className="cart__button button btn-reset">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart
