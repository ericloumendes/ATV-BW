import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class cadastroServico extends Cadastro{

    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do serviço: `);

        let prod = new Servico(nome, valor, genero);
        this.servicos.push(prod);
        console.log(`\nCadastro concluído!\n`);
    }
}