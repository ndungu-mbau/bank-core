export const dbconfig = {
    host: process.env.PGHOST || "localhost",
    port: process.env.PGPORT || "5432",
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "alpine",
    database: process.env.PGDATABASE || "test",
};
