import React from "react";
import axios from "axios";

function Cart({ onClose, products = [], setCartProducts, cartProducts }) {
  React.useEffect(() => {
    axios
      .get("https://f070f08733d5b515.mokky.dev/cart")
      .then((res) => {
        setCartProducts(res.data);
      });
  }, []);

  const removeCartProduct = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
    axios.delete(
      `https://f070f08733d5b515.mokky.dev/cart/${id}`,
    );
    console.log(id);
  };

  return (
    <div className="cart">
      <div className="cart__drawer">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <button className="cart__close btn-reset" onClick={onClose}>
            <img src="/images/icons/remove.svg" alt="Закрыть корзину" />
          </button>
        </div>

        {products.length < 1 ? (
          <div className="cart__empty empty">
            <img
              className="empty__img"
              width={180}
              src="/images/icons/cart-empty.svg"
              alt="Корзина пустая"
            />
            <h3 className="empty__title">Корзина пустая</h3>
            <p className="empty__subtitle">
              Добавьте хотя бы одну пару кроссовок, что бы сделать заказ
            </p>
            <button className="empty__button button btn-reset" onClick={onClose}>
              Вернуться назад
            </button>
          </div>
        ) : (
          <div className="cart__info">
            <ul className="cart__list list-reset">
              {products.map((product) => (
                <li className="cart__item" key={product.id}>
                  <article className="cart__card cart-card">
                    <img
                      width={70}
                      src={product.imageUrl}
                      alt={product.title}
                      className="cart-card__image"
                    />
                    <div className="cart-card__info">
                      <h3 className="cart-card__title">{product.title}</h3>
                      <span className="cart-card__price">
                        {product.price} ₽
                      </span>
                    </div>

                    <button
                      className="cart-card__remove btn-reset"
                      onClick={() => removeCartProduct(product.id)}
                    >
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
        )}
      </div>
    </div>
  );
}

export default Cart;
