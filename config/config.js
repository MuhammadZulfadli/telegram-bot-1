require("dotenv").config({ path: ".env" });

const mysql = require("mysql2/promise");

mysql
  .createConnection({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  })
  .then((x) =>
    x
      .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME};`)
      .then((y) => {
        console.log("Database created or successfully connected");
      })
  )
  .catch((error) => {
    console.log(error);
  });

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases: 0,
    define: {
      timestamps: 1,
      underscored: 1,
      underscoredAll: 1,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases: 0,
    define: {
      timestamps: 1,
      underscored: 1,
      underscoredAll: 1,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  production: {
    username: "root",
    password: "123456",
    database: "order_backend",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 0,
    use_env_variable: "DATABASE_URL",
    define: {
      timestamps: 1,
      underscored: 1,
      underscoredAll: 1,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
};
