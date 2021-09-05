import React, { useContext } from 'react'
import cartContext from '../../store/cart-context';
import styles from '../css/Cart.module.scss'
import Modal from '../UI/Modal/Modal'
import CartItems from './CartItems';

export default function Cart({isCartShown}) {
    console.log("i am cart");

    const cartCtx = useContext(cartContext)

    const cartItemAddHandler = (item) => {
      console.log(item);
      cartCtx.addItems({...item , quantity:1})
    };

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItems(id)
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
          {cartCtx.items.map((val,index) => (
            <CartItems key={index} item={val.item} quantity={val.quantity} price={val.price} onRemove={cartItemRemoveHandler.bind(null, val.id)} onAdd={cartItemAddHandler.bind(null, val)}/>
          ))}
        </ul>
      );
    
      return (
        <Modal isCartShown={isCartShown}>
          <div className={styles.list}>
            {cartItems}
          </div>
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>Rs.{cartCtx.totalAmt.toFixed(2)}/-</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.button_cls} onClick={()=>isCartShown(false)}>Close</button>
            { cartCtx.items.length===0 || <button className={styles.button} onClick={()=>{console.log("ordering...")}}>Order Now</button>}
          </div>
        </Modal>
      );
};
