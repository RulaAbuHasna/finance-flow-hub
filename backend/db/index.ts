import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import "dotenv/config";

const queryClient = postgres(
  `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDB}?sslmode=require`,
  { max: 1 }
);

export const db = drizzle(queryClient);

await migrate(db, { migrationsFolder: "backend/db/migrations" })
  .then(() => console.log("this was a successfull migration"))
  .catch((err) => console.log("Oops an error of ", err, "occured"));

await queryClient.end();
