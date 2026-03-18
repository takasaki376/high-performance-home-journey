import { Metadata } from 'next'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import PostCard from '@/components/PostCard'
import ProfileCard from '@/components/ProfileCard'
import CTASection from '@/components/CTASection'
import Link from '@/components/Link'
import { getFeaturedPosts, getLatestPosts } from '@/data/blog-data/posts'
import { categories } from '@/data/blog-data/categories'

export const metadata: Metadata = {
  title: '私が高性能住宅を選ぶまで',
  description:
    'マンションvs戸建て、新築vs中古、建売vs注文住宅、土地選び、住宅性能まで──家づくりの意思決定プロセスを論理的に整理するブログ',
}

const DECISION_STEPS = [
  {
    step: 1,
    title: 'マンション vs 戸建て',
    desc: 'コスト・管理・資産性・自由度で比較する',
    category: 'マンションと戸建て',
  },
  {
    step: 2,
    title: '新築 vs 中古',
    desc: '価格・性能・立地・リスクの観点で整理する',
    category: '新築と中古',
  },
  {
    step: 3,
    title: '建売 vs 注文住宅',
    desc: 'コスト・自由度・品質・スケジュールで判断する',
    category: '建売と注文住宅',
  },
  {
    step: 4,
    title: '土地選び',
    desc: '立地・形状・法規制・地盤・擁壁を確認する',
    category: '土地選び',
  },
  {
    step: 5,
    title: '住宅性能',
    desc: '断熱・気密・UA値・BEIで性能を評価する',
    category: '住宅性能',
  },
  {
    step: 6,
    title: '高性能住宅という結論',
    desc: 'WELLNEST HOMEをはじめとする高性能住宅の価値観',
    category: 'WELLNEST HOME',
  },
]

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const latestPosts = getLatestPosts(4)

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Decision steps */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <SectionHeading
          title="家づくりの比較検討ステップ"
          subtitle="このブログでは以下の順番で意思決定プロセスを整理しています"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DECISION_STEPS.map((s) => (
            <Link
              key={s.step}
              href={`/posts?category=${encodeURIComponent(s.category)}`}
              className="group rounded-xl border border-gray-100 bg-white p-5 transition hover:border-gray-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
            >
              <span className="mb-2 inline-block text-xs font-bold text-gray-400">
                STEP {s.step}
              </span>
              <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-base font-bold text-gray-900 dark:text-gray-100">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Category cards */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <SectionHeading title="カテゴリ一覧" />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/posts?category=${encodeURIComponent(cat.label)}`}
              className="rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured posts */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <SectionHeading
          title="おすすめ記事"
          subtitle="このブログを初めて読む方にお勧めの記事です"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Latest posts */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <SectionHeading title="新着記事" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Profile CTA */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <div className="grid gap-8 md:grid-cols-2">
          <ProfileCard />
          <CTASection
            title="記事一覧を見る"
            description="カテゴリ・タグで絞り込んで、気になる記事を探してください。"
            linkHref="/posts"
            linkText="記事一覧へ →"
          />
        </div>
      </section>
    </>
  )
}
