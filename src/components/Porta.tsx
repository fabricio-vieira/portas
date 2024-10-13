import React from 'react'
import styles from '../styles/Porta.module.css'
import PortaModel from '../models/porta'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternar_selecao())
    const abrir = (e: any) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ?
                    renderizarPorta() :
                    porta.tem_presente ? <Presente /> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div >
    )
}