import Link from "next/link"
import type { BlogPost } from "@/lib/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <Link href={`/posts/${post.slug}`} className="group">
          <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && <span>by {post.author}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed mb-4">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
