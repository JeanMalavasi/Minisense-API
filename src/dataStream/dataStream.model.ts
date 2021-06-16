import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { MeasurementUnit } from "src/measurementUnit/measurementUnit.model"
import { SensorData } from "src/SensorData/sensordata.model"
import { SensorDevice } from "src/sensorDevice/sensorDevice.model"

@Table
export class DataStream extends Model<DataStream>{
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    key: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    label: string

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    enabled: boolean
    
    @ForeignKey(() => SensorDevice)
    @Column({
        allowNull: false,
        onDelete: 'CASCADE',
        unique: 'compose'
    })
    sensorDeviceId: number
    @BelongsTo(() => SensorDevice)
    sensorDevice: SensorDevice

    @ForeignKey(() => MeasurementUnit)
    @Column({
        allowNull: true,
        onDelete: 'SET NULL',
        unique: 'compose'
    })
    measurementUnitId: number
    @BelongsTo(() => MeasurementUnit)
    measurementUnit: MeasurementUnit

    @HasMany(() => SensorData)
    sensordata: SensorData
}