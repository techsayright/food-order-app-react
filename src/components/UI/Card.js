import React from 'react'
import styles from '../css/Card.module.scss'

export const Card = (props) => {
    return (
        <div className={styles.card }>
            {props.children}
        </div>
    )
}
