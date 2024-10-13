import { useEffect, useState } from "react"
import styles from '../../../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Porta from "../../../components/Porta"
import { useRouter } from "next/router"
import Link from "next/link"
import PortaModel from "../../../models/porta"

export default function Jogo() {
    const [portas, setPortas] = useState<PortaModel[]>([])
    const [validacao, setValidacao] = useState(false)

    const router = useRouter()



    useEffect(() => {
        const checkPortas = parseInt(router.query.portas as string, 10)
        const checkPortaComPresente = parseInt(router.query.temPresente as string, 10)
        const validacao = checkPortaComPresente > 0 &&
            checkPortaComPresente <= checkPortas &&
            checkPortas <= 10
        setValidacao(validacao)
    }, [router.query.portas, router.query.temPresente])

    useEffect(() => {
        const portas = parseInt(router.query.portas as string, 10)
        const temPresente = parseInt(router.query.temPresente as string, 10)
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(p => {
            return <Porta key={p.numero} value={p} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            {validacao ?
                <div className={styles.portas}>
                    {renderizarPortas()}
                </div>
                :
                <div>
                    <h1>Dados Invalidos! Maximo 10 Portas</h1>
                </div>
            }

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}