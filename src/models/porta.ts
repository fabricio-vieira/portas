export default class PortaModel {
    #numero: number
    #tem_presente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, tem_presente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#tem_presente = tem_presente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }
    get tem_presente() {
        return this.#tem_presente
    }
    get selecionada() {
        return this.#selecionada
    }
    get aberta() {
        return this.#aberta
    }
    get fechada() {
        return !this.aberta
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.tem_presente, selecionada, this.aberta)
    }

    alternar_selecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.tem_presente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.tem_presente, this.selecionada, aberta)

    }
}

