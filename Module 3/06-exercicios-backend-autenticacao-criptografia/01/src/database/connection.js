import pg from 'pg'
const { Pool } = pg;
import { connectionDb } from './ignoreFile.js';

export const pool = new Pool({
    host: connectionDb.host,
    port: connectionDb.port,
    user: connectionDb.user,
    password: connectionDb.password,
    database: connectionDb.database
});