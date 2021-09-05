import React, { Fragment } from 'react'
import reactDom from 'react-dom'
import styles from '../../css/Modal.module.scss'

export default function Modal(props) {
    return (
        <React.Fragment>
            {reactDom.createPortal(
                <Fragment>
                    <div className={styles.overlay} onClick={()=>props.isCartShown(false)}/>
                    <div className={styles.dialog}>
                        {props.children}
                    </div>
                </Fragment>, 
                document.getElementById('overlay')
            )}
        </React.Fragment>
    )
}
