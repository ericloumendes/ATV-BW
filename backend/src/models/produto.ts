import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cliente } from "./cliente"
import { ProdutoConsumo } from "./produto-consumo";

@Table({
    tableName: 'Produto',
    timestamps: false
})

export class Produto extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    prod_cod!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    prod_nome!: string;

    @Column({
        type: DataType.DECIMAL(8,2),
        allowNull: false
    })
    prod_valor!: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    prod_genero!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    prod_dataCriacao!: string;

    // @BelongsToMany(() => Cliente, () => ProdutoConsumo)
    // clientes!: Cliente[]
}