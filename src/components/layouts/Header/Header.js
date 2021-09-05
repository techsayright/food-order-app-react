import React from 'react';
import foodImage from '../../asserts/images/food-image.jpg';
import styles from '../../css/Header.module.scss'
import HeaderCartBtn from './HeaderCartBtn';
export default function Header({isCartShown}) {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Apni Hotel</h1>
                <HeaderCartBtn isCartShown={isCartShown} />
            </header>
            <div className={styles.mainImages}>
                <img src={foodImage} alt="Delicious foods" />
            </div>
        </React.Fragment>
    )
}
