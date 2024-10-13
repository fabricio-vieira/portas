import React, { useState } from 'react'
import styles from '../styles/Form.module.css'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'


export default function Form() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)
    return (
        <div className={styles.form}>
            <div >
                <Cartao bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Qtde Portas" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
                </Cartao>
            </div>
            <div >
                <Cartao>
                    <EntradaNumerica text="Add o Presente" value={comPresente} onChange={portaComPresente => setComPresente(portaComPresente)} />
                </Cartao>
                <Cartao bgcolor="#28a085">
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
                        <h2 className={styles.link}>Inicializar</h2>
                    </Link>
                </Cartao>
            </div>
        </div >
    )
}