import React from 'react'
import styles from '../styles/Presente.module.css'

export default function Presente() {
    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.corpo}></div>
            <span className={styles.laco}></span>
            <span className={styles.lacoh}></span>
        </div>
    )
}