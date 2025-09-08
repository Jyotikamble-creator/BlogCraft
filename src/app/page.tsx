
import { getAllPosts } from "@/lib/blog"
import { BlogHeader } from "@/components/blogHeader"
import { BlogPostCard } from "@/components/blogPost"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-primary mb-8">Latest Posts</h1>
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">No blog posts found. Create your first post!</p>
                <p className="text-sm text-muted-foreground">
                  Add markdown files to the <code className="bg-muted px-2 py-1 rounded">content/posts</code> directory.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-sidebar p-6 rounded-lg">
              <h3 className="text-lg font-bold text-sidebar-foreground mb-4">About This Blog</h3>
              <p className="text-sidebar-foreground text-sm leading-relaxed mb-4">
                Welcome to my blog! Here I share thoughts on web development, technology, and more.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sidebar-foreground">Recent Topics</h4>
                <ul className="text-sm text-sidebar-foreground space-y-1">
                  <li>• Next.js Development</li>
                  <li>• TypeScript Tips</li>
                  <li>• Web Performance</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
