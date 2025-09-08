export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
  tags?: string[]
}

export interface BlogPostMetadata {
  title: string
  date: string
  excerpt: string
  author?: string
  tags?: string[]
}
