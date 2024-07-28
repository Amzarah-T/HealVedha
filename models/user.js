import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'unique_email',
      msg: 'Email address must be unique.',
    },
    validate: {
      isEmail: {
        msg: 'Invalid email format.',
      },
    },
  },
  
  // Additional fields:
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userrole: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

User.associate 

export default User;