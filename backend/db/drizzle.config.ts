import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: 'backend/db/schema.ts',
    out: 'backend/db/migrations',
    driver: 'pg',
    dbCredentials: {
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST || "localhost",
        user: process.env.PGUSER,
        database: process.env.PGDB || "test",
        ssl: true,
    },
} satisfies Config;

function test(){
    console.log('test 123 ------------->> ', process.env.PGDB)
}

test()