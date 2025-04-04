import "reflect-metadata";
import { DataSource } from "typeorm";
import { Exam } from "./entity/Exam";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "1234",
  database: "exam_db",
  synchronize: true,
  logging: false,
  entities: [Exam],
  migrations: [],
  subscribers: [],
});
