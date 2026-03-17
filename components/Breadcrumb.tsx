import Link from './Link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-gray-700 dark:hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
