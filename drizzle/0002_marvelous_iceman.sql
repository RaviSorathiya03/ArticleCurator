CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"url" text,
	"description" text,
	"categoryId" integer,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "article" CASCADE;