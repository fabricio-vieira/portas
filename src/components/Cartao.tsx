import styles from '../styles/Cartao.module.css'

interface CrataoProps {
    bgcolor?: string
    children?: any
}

export default function Cartao(props: CrataoProps) {
    return (
        <div className={styles.cartao} style={{ backgroundColor: props.bgcolor ?? "#fff" }}>
            {props.children}
        </div>
    )
}