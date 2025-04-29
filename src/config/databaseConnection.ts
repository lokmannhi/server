import { DataSource } from "typeorm";
import { defaultConfig } from "./config";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: defaultConfig.mssql.host,
  username: defaultConfig.mssql.username,
  password: defaultConfig.mssql.password,
  database: defaultConfig.mssql.database,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/../entity/**/*.js"],
  options: {
      encrypt: false
  }
})
