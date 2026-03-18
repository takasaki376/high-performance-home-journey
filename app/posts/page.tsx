import { Metadata } from 'next'
import { Suspense } from 'react'
import SectionHeading from '@/components/SectionHeading'
import PostCard from '@/components/PostCard'
import FilterPanel from '@/components/FilterPanel'
import Sidebar from '@/components/Sidebar'
import { posts, getAllCategories, getAllTags } from '@/data/blog-data/posts'
import type { Tag } from '@/data/blog-data/types'

export const metadata: Metadata = {
  title: '記事一覧',
  description:
    '家づくりの意思決定プロセスに関するすべての記事を掲載しています。カテゴリやタグで絞り込んで読みたい記事を見つけてください。',
}

interface PostsPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const params = await searchParams
  const selectedCategory = params.category ?? ''
  const selectedTag = params.tag ?? ''

  const allCategories = getAllCategories()
  const allTags = getAllTags()

  const filteredPosts = posts.filter((post) => {
    if (post.draft) return false
    if (selectedCategory && post.category !== selectedCategory) return false
    if (selectedTag && !post.tags.includes(selectedTag as Tag)) return false
    return true
  })

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const filterLabel =
    selectedCategory && selectedTag
      ? `${selectedCategory} × #${selectedTag}`
      : selectedCategory
        ? selectedCategory
        : selectedTag
          ? `#${selectedTag}`
          : null

  return (
    <div className="py-8">
      <SectionHeading
        title={filterLabel ? `${filterLabel} の記事` : '記事一覧'}
        subtitle={`${sortedPosts.length}件の記事`}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div>
          {/* Filter panel (mobile / top) */}
          <div className="mb-6 lg:hidden">
            <Suspense fallback={null}>
              <FilterPanel
                categories={allCategories}
                tags={allTags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
              />
            </Suspense>
          </div>

          {sortedPosts.length === 0 ? (
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-gray-500 dark:text-gray-400">該当する記事がありませんでした。</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {sortedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar (desktop) */}
        <div className="hidden space-y-8 lg:block">
          <Suspense fallback={null}>
            <FilterPanel
              categories={allCategories}
              tags={allTags}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
          </Suspense>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
