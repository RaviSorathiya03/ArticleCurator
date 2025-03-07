import { db } from "@/db";
import { articles,  categories } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { categorizeArticle } from "@/lib/CategoryOrganizer";
import { eq } from "drizzle-orm";
import { query } from "@/lib/data";

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ message: "You must be logged in to perform this task" }, { status: 401 });
    }

    const fetchArticles = await axios.post(
      "https://google.serper.dev/search",
      { q: query },
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.SERPER_API_KEY!,
        },
      }
    );

    const articlesData = fetchArticles.data.organic || [];

    await Promise.all(
      articlesData.map(async (article: any) => {
        const categoryName = await categorizeArticle(article);
        console.log("Category Name:", categoryName);
        const category = await db
          .select({ id: categories.id })
          .from(categories)
          .where(eq(categories.name, categoryName));
        console.log("Category:", category);
        const categoryId = category.length > 0 ? category[0].id : null;
      

        await db.insert(articles).values({
          title: article.title,
          url: article.link,
          description: article.snippet,
          categoryId: categoryId? categoryId: 0,
          createdAt: new Date(),
        });
      })
    );

    return NextResponse.json({ message: "Articles fetched and stored successfully" });
  } catch (error) {
    console.error("Error fetching or storing articles:", error);
    return NextResponse.json({ message: "Failed to fetch or store articles" }, { status: 500 });
  }
}

export async function GET(req: NextRequest){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "You must be logged in to perform this task"
            }, {status: 403})
        }
        const articlesWithCategories = await db
        .select({
          id: articles.id,
          title: articles.title,
          url: articles.url,
          description: articles.description,
          createdAt: articles.createdAt,
          categoryId: categories.id,
          categoryName: categories.name,
        })
        .from(articles)
        .leftJoin(categories, eq(articles.categoryId, categories.id));
  
        return NextResponse.json({
            data: articlesWithCategories
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}
