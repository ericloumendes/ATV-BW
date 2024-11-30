export default class Servico {
    public nome!: string
    private valor!: number
    private genero!: string
    private dataCadastro: Date
    private consumidos!: number
    constructor(nome: string, valor: number, genero: string) {
        this.nome = nome
        this.valor = valor
        this.genero = genero
        this.consumidos = 0
        this.dataCadastro = new Date()
    }

    public get getValorProduto(){
        return this.valor
    }

    public get getGeneroProduto(){
        return this.genero
    }

    public get getConsumoProduto(){
        return this.consumidos
    }

    public setConsumoProduto(valor: number){
        this.consumidos += valor;
    }

    public setGeneroProduto(valor: string){
        this.genero = valor
    }

    public setValorProduto(valor: number){
        this.valor = valor
    }
}