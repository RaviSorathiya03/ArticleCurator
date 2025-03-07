import { LoadingArticles } from "@/components/ui/loading-articles"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-2 mb-8">
        <div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-96 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="mb-8">
        <div className="h-10 w-full max-w-md animate-pulse rounded-md bg-muted" />
      </div>

      <LoadingArticles />
    </div>
  )
}

