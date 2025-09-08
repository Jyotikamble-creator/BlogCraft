import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog"
import { BlogHeader } from "@/components/blog-header"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4 text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && <span>by {post.author}</span>}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <MarkdownRenderer content={post.content} />
        </article>
      </main>
    </div>
  )
}
