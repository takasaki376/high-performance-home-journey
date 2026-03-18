import NextImage from 'next/image'
import Link from './Link'
import { profile } from '@/data/blog-data/profile'

export default function ProfileCard() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-4">
        <NextImage
          src={profile.avatar}
          alt={profile.displayName}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900 dark:text-gray-100">{profile.displayName}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">筆者</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{profile.bio}</p>
      <Link
        href="/about"
        className="text-primary-500 hover:text-primary-600 mt-4 inline-block text-sm font-medium"
      >
        プロフィール詳細 →
      </Link>
    </div>
  )
}
