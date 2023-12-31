import { serial, text, pgSchema, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema")

export const mySchemaUsers = mySchema.table('users', {
    id: serial('id').primaryKey(),
    username: text('username'),
    email: varchar('email', { length: 100 }).notNull().unique(),
    emailVerified: boolean('verified').default(false),
    password: text('password'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});