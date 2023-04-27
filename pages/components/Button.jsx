import React from 'react'
import styles from '../../styles/button.module.css'
function Button() {
  return (
    <>
    <div className={styles.center}>
        <div className={styles.buttons}>
        <h4>What are you here for?...</h4>
            <button className={styles.btn1}>BUY</button>
            <button className={styles.btn2}>SELL</button>
        </div>
    </div>
    </>
  )
}

export default Button
