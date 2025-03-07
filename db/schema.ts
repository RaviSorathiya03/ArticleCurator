import { integer, pgTable, primaryKey, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email", {length:255}).unique().notNull(),
    firstName: varchar("firstName", {length: 100}).unique().notNull(),
    lastName: varchar("lastName", {length: 100}).unique().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
})

export const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: varchar("name", {length:100}).notNull()
})

export const userCategories = pgTable("user_categories", {
    userId: integer("user_id")
    .notNull()
    .references(()=> users.id, {onDelete: "cascade"}),

    categoryId: integer("category_id")
    .notNull()
    .references(()=>categories.id, {onDelete: "cascade"})
}, 
    (table)=>{
        return{
            pk: primaryKey({columns: [table.userId, table.categoryId]})
        }
    }

)

export const articles = pgTable("article", {
    id: serial("id").primaryKey(),
    title: text("title"),
    url: text("url"),
    description: text("description"),
    imageUrl: text("image_url"),
    categoryId: integer("category_id")
    .references(()=>categories.id, {onDelete: "cascade"}),
    createdAt: timestamp("create_at")
})