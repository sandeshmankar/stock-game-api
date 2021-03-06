const DataTypes = require('sequelize');
const db = require('../db/db');

const AdminPolicy = db.define('adminPolicy', {
    PID: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    userLockTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    invalidAttemptsAllowed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    otpValidTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    passwordResetTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    isApiAllowed: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'true'
    },
    source: {
      type: DataTypes.TINYINT(4),
      allowNull: false
    },
    isActive: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false,
      defaultValue: 'active'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
      field: 'updated_at'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    tableName: 'adminPolicy'
});

module.exports = AdminPolicy;

