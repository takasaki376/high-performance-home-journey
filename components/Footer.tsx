import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col items-center gap-4 py-8">
        <nav className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">
            ホーム
          </Link>
          <Link href="/posts" className="hover:text-gray-700 dark:hover:text-gray-300">
            記事一覧
          </Link>
          <Link href="/about" className="hover:text-gray-700 dark:hover:text-gray-300">
            このブログについて
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-700 dark:hover:text-gray-300">
            プライバシーポリシー
          </Link>
        </nav>
        <div className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} {siteMetadata.author} · {siteMetadata.title}
        </div>
      </div>
    </footer>
  )
}
