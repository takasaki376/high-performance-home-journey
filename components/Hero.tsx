import Link from './Link'

export default function Hero() {
  return (
    <section className="py-16 md:py-24 text-center">
      <p className="mb-4 text-sm font-medium tracking-widest text-gray-400 uppercase">
        Personal Blog
      </p>
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
        私が高性能住宅を
        <br className="sm:hidden" />
        選ぶまで
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        マンション vs 戸建て、新築 vs 中古、建売 vs 注文住宅──
        <br className="hidden sm:block" />
        家づくりの意思決定プロセスを論理的に整理して発信するブログです。
      </p>
      <Link
        href="/about"
        className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
      >
        このブログについて →
      </Link>
    </section>
  )
}
