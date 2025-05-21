import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Sequelize, DataTypes, Model } from "sequelize";
import mysql2 from "mysql2";

dotenv.config();

const basename = path.basename(__filename);
const env = (process.env.NODE_ENV as string) || "development";
const config = require(path.join(__dirname, "..", "config", "config.js"))[env];

interface DB {
  [key: string]: typeof Model | any;
  isConnected?: boolean;
}

const db: DB = {} as DB;
let sequelize: Sequelize;
const MODELS: { [key: string]: typeof Model } = {};

if (
  config.use_env_variable &&
  process.env[config.use_env_variable as unknown as string]
) {
  sequelize = new Sequelize(
    process.env[config.use_env_variable as unknown as string] as string,
    config as unknown as string
  );
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: "mysql",
    dialectModule: mysql2,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 0,
      acquire: 10000,
      evict: 20000,
    },
    // logging: false,
  });
}

// Read and initialize all models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      (file.endsWith(".ts") || file.endsWith(".js"))
    );
  })
  .forEach((file) => {
    const modelImport = require(path.join(__dirname, file));
    const model = modelImport.default
      ? modelImport.default(sequelize)
      : modelImport(sequelize);
    if (!model || !model.name) {
      console.warn(`⚠️ Skipped loading model from file ${file}`);
      return;
    }
    db[model.name] = model;
  });

// Setup associations if any
Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
  }
  MODELS[modelName] = db[modelName];
});

// Initialize DB connection
export const sequelizeInit = async (): Promise<Sequelize> => {
  if (db.isConnected) {
    console.log("Using existing connection...");
    return sequelize;
  }

  if (env === "production") {
    await sequelize.authenticate();
  } else {
    await sequelize.sync();
  }

  db.isConnected = true;
  console.log("Created a new connection...");
  return sequelize;
};

// Expose models and sequelize instance
export const models = async () => {
  await sequelizeInit();
  return MODELS;
};

export default db;
