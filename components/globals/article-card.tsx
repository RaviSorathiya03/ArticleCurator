import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types/article"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-video">
          <Image
            src={"/article.jpg"}
            alt={article.title}
            fill
            className="object-cover rounded-full w-full h-full transition-transform group-hover:scale-105"
            
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="px-2 py-0 text-xs">
              {article.categoryName}
            </Badge>
            <time dateTime={`${article.createdAt}`} className="text-xs text-muted-foreground">
              {formatDate(`${article.createdAt}`)}
            </time>
          </div>
          <h2 className="line-clamp-2 text-xl font-semibold tracking-tight group-hover:text-primary">
            {article.title}
          </h2>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image
                src={"/user.webp"}
                alt={"Author"}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium">Author</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

