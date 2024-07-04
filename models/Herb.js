import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Herb = sequelize.define("Herb", {
  labelEn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  labelTm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  labelSn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  labelSc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Post.associate = (models) => {
//     Post.belongsTo(models.User)
// }

export default Herb;