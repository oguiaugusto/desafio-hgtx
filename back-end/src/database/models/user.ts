import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public status!: string;
  public lastUpdate!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'Pendente' },
    lastUpdate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize: db,
    modelName: 'User',
    timestamps: false,
  },
);

export default User;
