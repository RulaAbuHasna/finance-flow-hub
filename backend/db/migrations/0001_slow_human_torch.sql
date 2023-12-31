ALTER TABLE "my_schema"."users" RENAME COLUMN "name" TO "username";--> statement-breakpoint
ALTER TABLE "my_schema"."users" RENAME COLUMN "country" TO "email";--> statement-breakpoint
ALTER TABLE "my_schema"."users" ALTER COLUMN "email" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "my_schema"."users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "my_schema"."users" ADD COLUMN "verified" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "my_schema"."users" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "my_schema"."users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "my_schema"."users" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "my_schema"."users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");