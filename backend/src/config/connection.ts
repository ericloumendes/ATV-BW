import { Sequelize } from 'sequelize-typescript';
import { Cliente } from '../models/cliente';
import { Produto } from '../models/produto';
import { ProdutoConsumo } from '../models/produto-consumo';
import { Servico } from '../models/servico';
import { ServicoConsumo } from '../models/servico-consumo';
import { Telefones } from '../models/telefones';
import { Rgs } from '../models/rgs';

const sequelize = new Sequelize({
    database: "wb_atv6",
    username: "root",
    password: "root", // mudar senha
    host: "localhost", // colocar domínio
    port: 3306, // colocar porta
    dialect: 'mysql',
    models: [Cliente, Produto, ProdutoConsumo, Servico, ServicoConsumo, Telefones, Rgs], // Adiciona os modelos aqui
  });
  
  export default sequelize;