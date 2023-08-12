import { config } from "dotenv";
config();

export const configg= {
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DATABASE,
    dbPort: process.env.DB_PORT,
    jwtSecret: process.env.JWT_SECRET
}

