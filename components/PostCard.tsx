import NextImage from 'next/image'
import Link from './Link'
import type { Post } from '@/data/blog-data/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <Link
        href={`/posts/${post.slug}`}
        className="relative block h-48 overflow-hidden rounded-t-xl"
      >
        <NextImage
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readingTime}分で読める</span>
        </div>
        <h3 className="text-base leading-snug font-bold text-gray-900 dark:text-gray-100">
          <Link
            href={`/posts/${post.slug}`}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition"
          >
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 flex-1 text-sm text-gray-500 dark:text-gray-400">
          {post.excerpt}
        </p>
        <div className="mt-1 flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-50 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <time dateTime={post.publishedAt}>{publishedDate}</time>
          <Link
            href={`/posts/${post.slug}`}
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            続きを読む →
          </Link>
        </div>
      </div>
    </article>
  )
}
