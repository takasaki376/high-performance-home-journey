import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '「私が高性能住宅を選ぶまで」のプライバシーポリシーです。',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = '2025年3月1日'

  return (
    <div className="py-8 max-w-3xl mx-auto">
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        プライバシーポリシー
      </h1>
      <p className="mb-10 text-sm text-gray-400">最終更新日: {lastUpdated}</p>

      <div className="prose prose-gray max-w-none dark:prose-invert space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            個人情報の収集について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログ「私が高性能住宅を選ぶまで」では、現在お問い合わせフォームやコメント機能を設けていないため、閲覧者から直接個人情報を収集することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            アクセス解析ツールについて
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログでは、サイトの利用状況を把握するためにアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            広告について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログでは、将来的にGoogle AdSenseや各種アフィリエイトプログラムを利用する可能性があります。これらの広告配信業者はCookieを使用して広告を配信する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            免責事項
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログの情報は筆者個人の調査・見解に基づくものです。掲載内容の正確性・完全性を保証するものではありません。掲載情報を利用した結果生じたいかなる損害についても、当ブログは責任を負いかねます。住宅購入・資金計画などの重要な意思決定の際は、必ず専門家にご相談ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            著作権について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログの文章・画像等のコンテンツの無断転載・複製を禁じます。引用の際は出典を明記してください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            プライバシーポリシーの変更について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            当ブログは、必要に応じてプライバシーポリシーを変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じるものとします。
          </p>
        </section>
      </div>
    </div>
  )
}
