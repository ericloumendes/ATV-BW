import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroRg from "../negocio/cadastroRg";
import cadastroTelefone from "../negocio/cadastroTelefone";
import editarCliente from "../negocio/edicao/editarCliente";
import editarRg from "../negocio/edicao/editarRG";
import editarTelefoneCliente from "../negocio/edicao/editarTelefoneCliente";
import ExcluirCliente from "../negocio/exclusão/excluirCliente";
import ExcluirRG from "../negocio/exclusão/excluirRg";
import ExcluirTelefone from "../negocio/exclusão/excluirTelefone";
import ListagemClientes from "../negocio/listagemClientes";
import listagemClienteConsumoValor from "../negocio/listagens/listagemClienteConsumoValor";
import listagemClientesGenero from "../negocio/listagens/listagemClienteGenero";
import listagemMaisConsumoProduto from "../negocio/listagens/listagemMaisConsumoProduto";
import listagemMaisConsumoServico from "../negocio/listagens/listagemMaisConsumoServico";
import listagemMenosConsumoProduto from "../negocio/listagens/listagemMenosConsumidoProdutos";
import listagemMenosConsumoServico from "../negocio/listagens/listagemMenosConsumidoServico";
import listagemProdutoGenero from "../negocio/listagens/listagemProdutoGenero";
import listagemGeralConsumoProduto from "../negocio/listagens/listagemProdutosMaisConsumidos";
import listagemServicoGenero from "../negocio/listagens/listagemServicoGenero";
import listagemGeralConsumoServico from "../negocio/listagens/listagemServicosMaisConsumidos";
import cadastroConsumoProduto from "../negocio/produto/cadastroConsumoProduto";
import cadastroProduto from "../negocio/produto/cadastroProduto";
import editarProduto from "../negocio/produto/editarProduto";
import excluirProduto from "../negocio/produto/excluirProduto";
import listagemProdutos from "../negocio/produto/listagemProduto";
import cadastroConsumoServico from "../negocio/servico/cadastroConsumoServico";
import cadastroServico from "../negocio/servico/cadastroServico";
import editarServico from "../negocio/servico/editarServico";
import excluirServico from "../negocio/servico/excluirServico";
import listagemServicos from "../negocio/servico/listagemServico";
import filename from "./clientes.json";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
filename.forEach(cliente => {
    let newCliente = new Cliente(cliente.nome, cliente.nomeSocial, new CPF(cliente.cpf.valor, new Date), cliente.sexo)
    empresa.getClientes.push(newCliente)
})

while (execucao) {
    console.clear()
    console.log(`Opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`4 - Listas`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
    //Menu cliente
    if (opcao == 1){

        let menu = true
        while (menu)
            {

        console.clear();
        console.log(`Menu do cliente:`);
        console.log(`---------------------`);
        console.log(`Cadastrar`);
        console.log(`1 - Cadastrar cliente`);
        console.log(`2 - Cadastrar telefone`);
        console.log(`3 - Cadastrar RG`);
        console.log(`---------------------`);
        console.log(`Editar`);
        console.log(`4 - Editar cadastro de um cliente`);
        console.log(`5 - Editar telefone de um cliente`);
        console.log(`6 - Editar RG de um cliente`);
        console.log(`---------------------`);
        console.log(`Excluir`);
        console.log(`7 - Excluir um cliente`);
        console.log(`8 - Excluir um telefone de um cliente`);
        console.log(`9 - Excluir um RG de um cliente`);
        console.log(`---------------------`);
        console.log(`Listar`);
        console.log(`10 - Listar todos os clientes`);
        console.log(`---------------------`);
        console.log(`0 - Voltar`);
        console.log(``)

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (opcao) {
            case 1:
                console.clear();
                let cadastro = new CadastroCliente(empresa.getClientes)
                cadastro.cadastrar()
                entrada.receberNumero(`Aperte qualquer enter ..: `)
                break;
            case 2:
                console.clear()
                let cadastrado = new cadastroTelefone(empresa.getClientes);
                cadastrado.cadastrar();
                entrada.receberNumero(`Aperte qualquer enter ..:`);
                break;
            case 3:
                console.clear()
                let cadastRg = new CadastroRg(empresa.getClientes);
                cadastRg.cadastrar();
                entrada.receberNumero(`Aperte qualquer enter ..:`);
                break;
            case 4:
                console.clear();
                let editarClientes = new editarCliente(empresa.getClientes);
                editarClientes.editar();
                entrada.receberNumero(`Aperte qualquer enter ..:`)
                break;
            case 5:
                console.clear();
                let editarTel = new editarTelefoneCliente(empresa.getClientes);
                editarTel.editar();
                entrada.receberNumero(`Aperte qualquer enter ..:`)
                break;
            case 6:
                console.clear();
                let editarRG = new editarRg(empresa.getClientes);
                editarRG.editar();
                entrada.receberNumero(`Aperte qualquer enter ..:`)
                break;
            case 7:
                console.clear();
                let excluirCliente = new ExcluirCliente(empresa);
                excluirCliente.excluir();
                entrada.receberNumero(`Aperte qualquer enter ..:`)
                break;
            case 8:
                console.clear();
                let excluirTel = new ExcluirTelefone(empresa);
                excluirTel.excluir();
                entrada.receberNumero(`Aperte qualquer enter ..:`)
                break;
            case 9:
                console.clear();
                let excluirRg = new ExcluirRG(empresa)
                excluirRg.excluir()
                entrada.receberNumero(`Aperte qualquer enter ..: `)
                break;
            case 10:
                console.clear();
                let listagem = new ListagemClientes(empresa.getClientes)
                listagem.listar()
                entrada.receberNumero(`Aperte qualquer enter ..: `)
                break;
            case 0:
                menu = false
                break;
            default:
                console.clear();
                console.log(`Operação não entendida :(`)
                entrada.receberNumero(`Aperte qualquer enter ..: `)
                break;
        }
            }
    }

    else if (opcao == 2){
        let menu = true;

        while (menu === true){
            console.clear();
            console.log(`Menu do produto:`);
            console.log(`---------------------`);
            console.log(`Cadastrar`);
            console.log(`1 - Cadastrar um produto`);
            console.log(`2 - Cadastrar consumo de produto`)
            console.log(`---------------------`);
            console.log(`Editar`);
            console.log(`3 - Editar um produto`);
            console.log(`---------------------`);
            console.log(`Excluir`);
            console.log(`4 - Excluir um produto`);
            console.log(`---------------------`);
            console.log(`Listagem`);
            console.log(`5 - Listar todos os produtos cadastrados`);
            console.log(`---------------------`);
            console.log(`0 - Voltar`);
            console.log(``)

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao){
                case 1:
                    console.clear()
                    let cadastro = new cadastroProduto(empresa.getProdutos)
                    cadastro.cadastrar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 2:
                    console.clear()
                    let cadastro1 = new cadastroConsumoProduto(empresa.getClientes, empresa.getProdutos)
                    cadastro1.cadastrar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 3:
                    console.clear()
                    let editar = new editarProduto(empresa.getProdutos)
                    editar.editar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 4:
                    console.clear()
                    let excluir = new excluirProduto(empresa)
                    excluir.excluir();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 5:
                    console.clear()
                    let listagem = new listagemProdutos(empresa.getProdutos)
                    listagem.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 0:
                    menu = false
                    break;
                default:
                    console.clear();
                    console.log(`Operação não entendida :(`)
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
            }
        }
    }

    else if (opcao == 3){
        let menu = true;

        while (menu === true){
            console.clear();
            console.log(`Menu do serviço:`);
            console.log(`---------------------`);
            console.log(`Cadastrar`);
            console.log(`1 - Cadastrar um serviço`);
            console.log(`2 - Cadastrar consumo de serviço`)
            console.log(`---------------------`);
            console.log(`Editar`);
            console.log(`3 - Editar um serviço`);
            console.log(`---------------------`);
            console.log(`Excluir`);
            console.log(`4 - Excluir um serviço`);
            console.log(`---------------------`);
            console.log(`Listagem`);
            console.log(`5 - Listar todos os serviço cadastrados`);
            console.log(`---------------------`);
            console.log(`0 - Voltar`);
            console.log(``)

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao){
                case 1:
                    console.clear()
                    let cadastro = new cadastroServico(empresa.getServicos)
                    cadastro.cadastrar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 2:
                    console.clear()
                    let cadastro1 = new cadastroConsumoServico(empresa.getClientes, empresa.getServicos)
                    cadastro1.cadastrar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 3:
                    console.clear()
                    let editar = new editarServico(empresa.getServicos)
                    editar.editar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 4:
                    console.clear()
                    let excluir = new excluirServico(empresa)
                    excluir.excluir();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 5:
                    console.clear()
                    let listagem = new listagemServicos(empresa.getServicos)
                    listagem.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 0:
                    menu = false
                    break;
                default:
                    console.clear();
                    console.log(`Operação não entendida :(`)
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
            }
        }
    }

    else if (opcao == 4){
        let menu = true;

        while (menu === true){
            console.clear();
            console.log(`Menu de Listagens:`);
            console.log(`---------------------`);
            console.log(`Listar`);
            console.log(`Cliente`);
            console.log(`1 - 10 Clientes que mais consumiram produtos`)
            console.log(`2 - 10 Clientes que mais consumiram servicos`)
            console.log(`3 - Listagem de todos os clientes por gênero`)
            console.log(`4 - 10 Clientes que menos consumiram produtos`)
            console.log(`5 - 10 Clientes que menos consumiram serviços`)
            console.log(`6 - 5 Clientes que mais consumiram em valor`)
            console.log(`---------------------`);
            console.log(`Serviços/Produtos`);
            console.log(`7 - Produtos mais consumidos por gênero`)
            console.log(`8 - Serviços mais consumidos por gênero`)
            console.log(`9 - Serviços mais consumidos geral`)
            console.log(`10 - Produtos mais consumidos geral`)
            console.log(`0 - Voltar`);
            console.log(``)

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao){
                case 1:
                    console.clear();
                    let listagemConsumoProduto = new listagemMaisConsumoProduto(empresa.getClientes);
                    listagemConsumoProduto.listar()
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 2:
                    console.clear();
                    let listagemConsumoServico = new listagemMaisConsumoServico(empresa.getClientes);
                    listagemConsumoServico.listar()
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 3:
                    console.clear();
                    let listagemClienteGenero = new listagemClientesGenero(empresa.getClientes);
                    listagemClienteGenero.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 4:
                    console.clear();
                    let listagemMConsumoProduto = new listagemMenosConsumoProduto(empresa.getClientes);
                    listagemMConsumoProduto.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 5:
                    console.clear();
                    let listagemMConsumoServico = new listagemMenosConsumoServico(empresa.getClientes);
                    listagemMConsumoServico.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 6:
                    console.clear();
                    let listagemMClienteValor = new listagemClienteConsumoValor(empresa.getClientes);
                    listagemMClienteValor.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 7:
                    console.clear();
                    let listagemCProtudoGenero = new listagemProdutoGenero(empresa.getProdutos);
                    listagemCProtudoGenero.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 8:
                    console.clear();
                    let listagemCServicoGenero = new listagemServicoGenero(empresa.getServicos);
                    listagemCServicoGenero.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 9:
                    console.clear();
                    let listagemServicoMaisConsumo = new listagemGeralConsumoServico(empresa.getServicos);
                    listagemServicoMaisConsumo.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 10:
                    console.clear();
                    let listagemProdutoMaisConsumo = new listagemGeralConsumoProduto(empresa.getProdutos);
                    listagemProdutoMaisConsumo.listar();
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
                case 0:
                    menu = false
                    break;
                default:
                    console.clear();
                    console.log(`Operação não entendida :(`)
                    entrada.receberNumero(`Aperte qualquer enter ..: `)
                    break;
            }
        }
    }

    else if (opcao == 0){
        execucao = false
        console.log(`Até mais`)
        break;
    }

    else{
        console.clear();
        console.log(`Operação não entendida :(`)
        entrada.receberNumero(`Aperte qualquer enter ..: `)
    }
}