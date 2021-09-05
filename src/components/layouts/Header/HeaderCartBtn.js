import React, { useContext, useEffect, useState } from 'react'
import cartContext from '../../../store/cart-context'
import styles from '../../css/HeaderCartBtn.module.scss'

export default function HeaderCartBtn({isCartShown}) {

    console.log("headerbtn");
    const [isAddClass, setIsAddClass] = useState(false)
    const cartCtx = useContext(cartContext)

    const cartAddedNumber = cartCtx.items.reduce((accumulator , item)=>{
        return accumulator + item.quantity
    },0) 

    useEffect(()=>{
        console.log("added");
        setTimeout(()=>{
            setIsAddClass(false)
        },100)

        return()=>{
            console.log("ok");
            setIsAddClass(true)
        }
    },[cartAddedNumber])

    return (
        <button className={`${styles["btn-cart"]} ${isAddClass && styles.extra} `} onClick={()=>isCartShown(true)}>
            <span className={styles.icon}>
                <i className="fa fa-shopping-cart"></i>
            </span>
            <span className={styles.btnTxt}>Your Cart</span>
            <span className={styles.cartAdded}>{cartAddedNumber}</span>
        </button>
    )
}
