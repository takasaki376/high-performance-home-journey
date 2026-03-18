import { Metadata } from 'next'
import NextImage from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'
import Link from '@/components/Link'
import { getPostBySlug, getRelatedPosts, posts } from '@/data/blog-data/posts'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.filter((p) => !p.draft).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post, 3)

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const updatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <div className="py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Main article */}
        <div>
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: '記事一覧', href: '/posts' },
              {
                label: post.category,
                href: `/posts?category=${encodeURIComponent(post.category)}`,
              },
              { label: post.title },
            ]}
          />

          <article>
            {/* Cover image */}
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-80 md:h-96">
              <NextImage
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
            </div>

            {/* Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Link
                href={`/posts?category=${encodeURIComponent(post.category)}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {post.category}
              </Link>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <time dateTime={post.publishedAt}>公開: {publishedDate}</time>
                {updatedDate && <time dateTime={post.updatedAt}>更新: {updatedDate}</time>}
                <span>{post.readingTime}分で読める</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-2xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/posts?tag=${encodeURIComponent(tag)}`}
                  className="rounded bg-gray-50 px-2 py-1 text-xs text-gray-500 transition hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Body */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-gray-100"
                    >
                      {line.replace('## ', '')}
                    </h2>
                  )
                }
                if (
                  line.startsWith('1. ') ||
                  line.startsWith('2. ') ||
                  line.startsWith('3. ') ||
                  line.startsWith('4. ')
                ) {
                  return (
                    <li key={i} className="ml-4 text-gray-700 dark:text-gray-300">
                      {line.replace(/^\d+\. /, '')}
                    </li>
                  )
                }
                if (line.trim() === '') return <br key={i} />
                return (
                  <p key={i} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    {line}
                  </p>
                )
              })}
            </div>
          </article>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 border-t border-gray-100 pt-10 dark:border-gray-800">
              <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">関連記事</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
