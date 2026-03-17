import { Metadata } from 'next'
import Link from '@/components/Link'
import { profile } from '@/data/blog-data/profile'
import { categories } from '@/data/blog-data/categories'

export const metadata: Metadata = {
  title: 'このブログについて',
  description: '「私が高性能住宅を選ぶまで」のブログコンセプト、発信テーマ、筆者プロフィールについて説明します。',
}

const READING_ORDER = [
  {
    step: 1,
    title: '家づくりの全体像を把握する',
    href: '/posts?category=家づくり全体像',
    desc: 'まず大枠のフローと意思決定の順序を理解する',
  },
  {
    step: 2,
    title: 'マンション vs 戸建てを比較する',
    href: '/posts?category=マンションと戸建て',
    desc: 'コスト・管理・資産性・自由度の観点から比較',
  },
  {
    step: 3,
    title: '新築 vs 中古を比較する',
    href: '/posts?category=新築と中古',
    desc: '価格・性能・立地・リスクで整理する',
  },
  {
    step: 4,
    title: '建売 vs 注文住宅を比較する',
    href: '/posts?category=建売と注文住宅',
    desc: 'コスト・自由度・品質で判断する',
  },
  {
    step: 5,
    title: '土地選びを学ぶ',
    href: '/posts?category=土地選び',
    desc: '立地・形状・地盤・擁壁・法規制を確認する',
  },
  {
    step: 6,
    title: '住宅性能を理解する',
    href: '/posts?category=住宅性能',
    desc: '断熱・気密・UA値・BEIなどの性能指標を学ぶ',
  },
]

export default function AboutPage() {
  return (
    <div className="py-8 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        このブログについて
      </h1>
      <p className="mb-10 text-gray-500 dark:text-gray-400">
        「私が高性能住宅を選ぶまで」のコンセプトと筆者について
      </p>

      {/* Concept */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          ブログのコンセプト
        </h2>
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            このブログは、家づくりの意思決定プロセスを論理的に整理して発信することを目的としています。
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            「マンションvs戸建て」「新築vs中古」「建売vs注文住宅」という最初の大きな選択から、土地選び、住宅性能の評価基準、そして高性能住宅（特にWELLNEST HOME）という結論に至るまで──
            自分自身の検討プロセスをドキュメント化しています。
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            単なる主観的な日記ではなく、ファクトとロジックで意思決定を整理する、知的な比較ブログを目指しています。
          </p>
        </div>
      </section>

      {/* Target readers */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          こんな方に読んでほしい
        </h2>
        <ul className="space-y-3">
          {[
            'これから家づくりを始める方',
            'マンションか戸建てか迷っている方',
            '新築か中古かで悩んでいる方',
            '住宅性能（断熱・気密）に興味のある方',
            '高性能住宅メーカーを検討している方',
            '住宅購入を感情ではなくロジックで決めたい方',
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="mt-1 text-primary-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Themes */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">発信テーマ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/posts?category=${encodeURIComponent(cat.label)}`}
              className="rounded-lg border border-gray-100 p-4 transition hover:border-gray-300 hover:shadow-sm dark:border-gray-800 dark:hover:border-gray-600"
            >
              <p className="font-medium text-gray-900 dark:text-gray-100">{cat.label}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Reading order */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          読む順番のおすすめ
        </h2>
        <ol className="space-y-4">
          {READING_ORDER.map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-gray-100 dark:text-gray-900">
                {item.step}
              </span>
              <div>
                <Link
                  href={item.href}
                  className="font-medium text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 transition"
                >
                  {item.title}
                </Link>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Profile */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
          筆者プロフィール
        </h2>
        <div className="rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={profile.avatar}
              alt={profile.displayName}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {profile.displayName}
              </p>
              {profile.github && (
                <Link
                  href={profile.github}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {profile.longBio}
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/posts"
          className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
        >
          記事一覧を読む →
        </Link>
      </div>
    </div>
  )
}
