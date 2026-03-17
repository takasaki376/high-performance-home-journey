'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface FilterPanelProps {
  categories: string[]
  tags: string[]
  selectedCategory: string
  selectedTag: string
}

export default function FilterPanel({
  categories,
  tags,
  selectedCategory,
  selectedTag,
}: FilterPanelProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      const queryString = params.toString()
      router.push(queryString ? `/posts?${queryString}` : '/posts')
    },
    [router, searchParams]
  )

  const clearFilters = () => {
    router.push('/posts')
  }

  const hasActiveFilter = selectedCategory || selectedTag

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-900 dark:text-gray-100">絞り込み</h2>
        {hasActiveFilter && (
          <button
            onClick={clearFilters}
            className="text-xs text-primary-500 hover:text-primary-600 font-medium"
          >
            すべて表示
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">カテゴリ</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', selectedCategory === cat ? '' : cat)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tag filter */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">タグ</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => updateFilter('tag', selectedTag === tag ? '' : tag)}
              className={`rounded px-2 py-1 text-xs transition ${
                selectedTag === tag
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
