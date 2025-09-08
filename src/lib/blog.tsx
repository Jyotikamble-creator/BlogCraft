import type { BlogPost } from "./types"

// Static blog posts data - in a real app, this could come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    date: "2024-01-15",
    excerpt: "This is my first blog post where I introduce myself and talk about what you can expect from this blog.",
    content: `# Welcome to My Blog

Hello and welcome to my personal blog! I'm excited to share my thoughts and experiences with you.

## What You Can Expect

In this blog, I'll be writing about:

- Web development tips and tricks
- My journey learning new technologies
- Project showcases and tutorials
- Industry insights and trends

## About Me

I'm a passionate web developer who loves creating beautiful and functional applications. When I'm not coding, you can find me exploring new technologies or contributing to open source projects.

Thank you for visiting, and I hope you find the content here valuable!`,
    author: "Blog Author",
    tags: ["welcome", "introduction", "personal"],
  },
  {
    slug: "nextjs-typescript-tips",
    title: "Next.js and TypeScript: Essential Tips for Beginners",
    date: "2024-01-10",
    excerpt: "Learn essential tips and best practices for building applications with Next.js and TypeScript.",
    content: `# Next.js and TypeScript: Essential Tips for Beginners

Next.js and TypeScript make a powerful combination for building modern web applications. Here are some essential tips to get you started.

## 1. Proper Type Definitions

Always define proper types for your props and state:

\`\`\`typescript
interface BlogPostProps {
  title: string
  content: string
  publishedAt: Date
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, publishedAt }) => {
  return (
    <article>
      <h1>{title}</h1>
      <time>{publishedAt.toLocaleDateString()}</time>
      <div>{content}</div>
    </article>
  )
}
\`\`\`

## 2. Use Next.js Built-in Types

Next.js provides helpful types for common patterns:

\`\`\`typescript
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage = () => {
  return <div>Hello World</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
\`\`\`

## 3. Configure TypeScript Strict Mode

Enable strict mode in your \`tsconfig.json\` for better type safety:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

These tips will help you build more robust and maintainable applications!`,
    author: "Blog Author",
    tags: ["nextjs", "typescript", "tutorial", "web-development"],
  },
  {
    slug: "building-a-markdown-blog",
    title: "Building a Markdown Blog with Next.js",
    date: "2024-01-05",
    excerpt: "Step-by-step guide to creating a blog that renders markdown content with syntax highlighting.",
    content: `# Building a Markdown Blog with Next.js

Creating a blog with markdown support is a great way to learn Next.js fundamentals while building something practical.

## Why Markdown?

Markdown offers several advantages for blog content:

- **Easy to write**: Simple syntax that's human-readable
- **Version control friendly**: Plain text files work great with Git
- **Flexible**: Can be processed and styled however you want
- **Portable**: Not tied to any specific platform

## Key Technologies

For this blog, we're using:

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **gray-matter**: Parse markdown frontmatter
- **react-markdown**: Render markdown as React components

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Blog homepage
│   └── posts/[slug]/
│       └── page.tsx      # Individual post pages
├── components/
│   ├── blog-header.tsx
│   └── blog-post-card.tsx
├── lib/
│   ├── blog.ts           # Blog utilities
│   └── types.ts          # TypeScript types
└── content/
    └── posts/            # Markdown files
        ├── post-1.md
        └── post-2.md
\`\`\`

## Next Steps

Once you have the basic structure, you can enhance your blog with:

- Search functionality
- Tag filtering
- RSS feed generation
- Comment system integration
- SEO optimization

Happy blogging!`,
    author: "Blog Author",
    tags: ["nextjs", "markdown", "blog", "tutorial"],
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) || null
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
