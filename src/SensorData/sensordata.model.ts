import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { DataStream } from "src/dataStream/dataStream.model"
import { MeasurementUnit } from "src/measurementUnit/measurementUnit.model"

@Table
export class SensorData extends Model<SensorData>{
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    timestamp: Date

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    value: number
    
    @ForeignKey(() => DataStream)
    @Column({
        allowNull: false,
        onDelete: 'CASCADE',
     
    })
    dataStreamId: number
    @BelongsTo(() => DataStream)
    dataStream: DataStream

    @ForeignKey(() => MeasurementUnit)
    @Column({
        allowNull: false,

    })
    measurementUnitId: number
    @BelongsTo(() => MeasurementUnit) 
    measurementUnit: MeasurementUnit
}