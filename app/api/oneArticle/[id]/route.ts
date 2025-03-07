import { db } from "@/db";
import { articles } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json(
                { message: "You must be logged in to perform this task" },
                { status: 403 }
            );
        }

        // Get route parameters
        const url = new URL(req.url);
        const id = Number(url.pathname.split("/").pop());

        if (isNaN(id)) {
            return NextResponse.json(
                { message: "Invalid article ID" },
                { status: 400 }
            );
        }

        const article = await db.select().from(articles).where(eq(articles.id, id));
        return NextResponse.json(
            { data: article },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching article:", error);
        return NextResponse.json(
            { message: "Failed to fetch article" },
            { status: 500 }
        );
    }
}
