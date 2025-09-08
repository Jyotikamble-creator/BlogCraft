import Link from "next/link"

export function BlogHeader() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            My Blog
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-90 transition-opacity">
              About
            </Link>
            <Link href="/archive" className="hover:opacity-90 transition-opacity">
              Archive
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
