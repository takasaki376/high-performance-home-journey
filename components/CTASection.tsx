import Link from './Link'

interface CTASectionProps {
  title?: string
  description?: string
  linkHref?: string
  linkText?: string
}

export default function CTASection({
  title = 'すべての記事を読む',
  description = 'カテゴリ・タグで絞り込んで、気になる記事を探してください。',
  linkHref = '/posts',
  linkText = '記事一覧へ →',
}: CTASectionProps) {
  return (
    <section className="rounded-2xl bg-gray-50 p-8 text-center dark:bg-gray-900">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      <Link
        href={linkHref}
        className="mt-6 inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
      >
        {linkText}
      </Link>
    </section>
  )
}
