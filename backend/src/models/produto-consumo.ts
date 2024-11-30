import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Cliente } from './cliente';
import { Produto } from './produto';

@Table({
  tableName: 'Produto_Consumo',
  timestamps: false
})

export class ProdutoConsumo extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    consumo_cod!: number;

	// @ForeignKey(() => Produto)
	@Column({
		type: DataType.INTEGER
	})
	prod_cod!: number;

	// @ForeignKey(() => Cliente)
	@Column({
		type: DataType.INTEGER
	})
	cli_cod!: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	consumo_quantidade!: number;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	consumo_data!: number;

	// Relacionamentos
	// @BelongsTo(() => Produto)
	// produto!: Produto;
  
	// @BelongsTo(() => Cliente)
	// cliente!: Cliente;
}