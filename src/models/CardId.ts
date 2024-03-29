import { Model, DataTypes, Sequelize } from "sequelize";

export default class CardId extends Model {
  public id!: number;
  public isValid!: boolean;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: false
        },
        hash: DataTypes.STRING,
        isValid: DataTypes.BOOLEAN
      },
      { sequelize, modelName: "CardId" }
    );
  }
}
