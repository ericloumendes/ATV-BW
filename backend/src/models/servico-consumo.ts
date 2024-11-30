import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Servico } from './servico';
import { Cliente } from './cliente';

@Table({
  tableName: 'Servico_Consumo',
  timestamps: false
})

export class ServicoConsumo extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    consumo_cod!: number;

	// @ForeignKey(() => Servico)
	@Column({
		type: DataType.INTEGER
	})
	serv_cod!: number;

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

	// // Relacionamentos
	// @BelongsTo(() => Servico)
	// servico!: Servico;
  
	// @BelongsTo(() => Cliente)
	// cliente!: Cliente;
}