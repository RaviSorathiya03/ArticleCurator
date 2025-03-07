"use client";
import ArticleCard from "@/components/globals/article-card";
import { Loading } from "@/components/ui/loading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchArticles } from "@/lib/Query";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ArticlePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  const sortedArticles = data?.data?.data?.slice().sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title); // Sort by title ascending
    } else {
      return b.title.localeCompare(a.title); // Sort by title descending
    }
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching articles</div>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Sort by:</span>
          <Select value={sortOrder} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort articles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Title: A-Z</SelectItem>
              <SelectItem value="desc">Title: Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Latest Articles</h1>
        <p className="text-muted-foreground">
          Discover the latest insights and stories from our collection
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedArticles?.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
