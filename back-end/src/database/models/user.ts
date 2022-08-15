import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public lastUpdate!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    lastUpdate: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: 'User',
    timestamps: false,
  },
);

export default User;
