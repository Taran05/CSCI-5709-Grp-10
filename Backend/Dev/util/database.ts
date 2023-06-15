import { Sequelize } from "sequelize";
import PropertiesReader from "properties-reader";
import { dirPath } from "./path";

const properties = PropertiesReader(
  dirPath.join(__dirname, "../../dbconfig/properties.ini")
);

// const sequelize = new Sequelize(
//   `${properties.get("dev.db")}`,
//   `${properties.get("dev.username")}`,
//   `${properties.get("dev.password")}`,
//   {
//     dialect: "mysql",
//     host: `${properties.get("dev.host")}`,
//   }
// );

// const sequelize = new Sequelize(
//   `${properties.get("test.db")}`,
//   `${properties.get("test.username")}`,
//   `${properties.get("test.password")}`,
//   {
//     dialect: "mysql",
//     host: `${properties.get("test.host")}`,
//   }
// );

const sequelize = new Sequelize(
  `${properties.get("prod.db")}`,
  `${properties.get("prod.username")}`,
  `${properties.get("prod.password")}`,
  {
    dialect: "mysql",
    host: `${properties.get("prod.host")}`,
  }
);

export { sequelize };
