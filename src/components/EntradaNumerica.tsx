import { propagateServerField } from 'next/dist/server/lib/render-server'
import styles from '../styles/EntradaNumerica.module.css'


interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}


export default function EntradaNumerica(props: EntradaNumericaProps) {
    const inc = () => props.onChange(props.value + 1)
    const dec = () => props.onChange(props.value - 1)



    return (
        <div className={styles.entrada}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}