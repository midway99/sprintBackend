const {sequelize} = require("../db/db");
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type:DataTypes.STRING,
    },
    body:{
        type:DataTypes.STRING,
    },
    author_id:{
        type:DataTypes.INTEGER,
    }
});

module.exports = {Post};