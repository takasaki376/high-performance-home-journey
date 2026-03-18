import Link from './Link'
import ProfileCard from './ProfileCard'
import { categories } from '@/data/blog-data/categories'
import { getAllTags, getFeaturedPosts } from '@/data/blog-data/posts'

export default function Sidebar() {
  const tags = getAllTags()
  const featuredPosts = getFeaturedPosts().slice(0, 5)

  return (
    <aside className="space-y-8">
      {/* Profile */}
      <ProfileCard />

      {/* Categories */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 font-bold text-gray-900 dark:text-gray-100">カテゴリ</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/posts?category=${encodeURIComponent(cat.label)}`}
                className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-600 transition dark:text-gray-400"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 font-bold text-gray-900 dark:text-gray-100">タグ</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 font-bold text-gray-900 dark:text-gray-100">おすすめ記事</h3>
        <ul className="space-y-3">
          {featuredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="hover:text-primary-500 dark:hover:text-primary-400 text-sm leading-snug text-gray-700 transition dark:text-gray-300"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
