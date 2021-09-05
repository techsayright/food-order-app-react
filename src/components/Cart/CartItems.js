import React, { Fragment } from 'react'
import styles from '../css/CartItems.module.scss'

export default function CartItems({item, quantity ,price, onRemove ,onAdd}) {
    return (
    <Fragment>    
        <li className={styles.mainLi}>
            <div>
                <h3>{item}</h3>
                <div>
                    <span >Rs.{price}/-</span> &nbsp;
                    <span > <small>(qt: <strong>{quantity}</strong>)</small></span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
        <hr />
    </Fragment>
    )
}
