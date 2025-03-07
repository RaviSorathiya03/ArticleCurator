"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { fetchOneArticle } from "@/lib/Query";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string; // Ensure slug is treated as a string

  const { data, isLoading, error } = useQuery({
    queryKey: ["article", slug],
    queryFn: ()=>fetchOneArticle(parseInt(slug)),
  });

  console.log("Fetched data:", data); // To check what you're getting

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching articles</div>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/articles" className="flex items-center text-muted-foreground">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to articles
          </Link>
        </Button>
      </div>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="secondary">{data?.data?.data[0].categoryId}</Badge>
          {/* <time dateTime={data?.data?.data[0].createdAt} className="text-sm text-muted-foreground">
            {formatDate(data?.data?.createdAt)}
          </time> */}
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">{data?.data.data[0].title}</h1>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={"/user.webp"}
                alt={"Author"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{19} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{200} views</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <Image src={"/article.jpg"} alt={"This is the image if the article"} fill className="object-cover" priority />
        </div>
        
        <div className="space-y-4 text-blue-600">
          <h2 className="text-2xl font-bold">Explore this Amazing Article</h2>
          <p>Discover the full details and insights by clicking the link below:</p>
          <a href={data?.data.data[0]?.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">
              Read the full article here
          </a>
      </div>
      </article>
    </main>
  );
}
