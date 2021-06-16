import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { DataStream } from "src/dataStream/dataStream.model"
import { SensorData } from "src/SensorData/sensordata.model"

@Table
export class MeasurementUnit extends Model<MeasurementUnit>{
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    symbol: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    description: string
    
    @HasMany(() => SensorData)
    sensorData: SensorData

    @HasMany(() => DataStream)
    dataStream: DataStream
}