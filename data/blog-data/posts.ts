import type { Post } from './types'

export const posts: Post[] = [
  {
    slug: 'mansion-vs-kodate-how-to-decide',
    title: 'マンションvs戸建て、どう考えればいいか',
    excerpt:
      'マンションと戸建ての違いを、コスト・管理・自由度・資産性の観点から整理します。どちらが優れているかではなく、あなたの優先順位で選ぶための思考フレームを提供します。',
    coverImage: 'https://picsum.photos/seed/mansion/800/400',
    publishedAt: '2024-11-01',
    updatedAt: '2024-11-15',
    category: 'マンションと戸建て',
    tags: ['管理費', '修繕費', '資産価値'],
    featured: true,
    draft: false,
    readingTime: 8,
    author: 'takasaki',
    content: `
## はじめに

マンションと戸建て、どちらを選ぶかは多くの人が悩む問題です。

## コスト比較

マンションには管理費・修繕積立金がかかります。戸建てにはそれがない代わりに、自分でメンテナンス費用を積み立てる必要があります。

## 資産性について

立地次第ではマンションの方が流動性が高いケースもあります。

## まとめ

どちらが正解ではなく、あなたのライフスタイルと優先順位で選びましょう。
    `.trim(),
  },
  {
    slug: 'mansion-management-fee-hidden-cost',
    title: 'マンションの管理費・修繕積立金の正体',
    excerpt:
      '毎月必ずかかるマンションの管理費と修繕積立金。この2つが何に使われているのか、将来どう変化するのかを解説します。',
    coverImage: 'https://picsum.photos/seed/mansion2/800/400',
    publishedAt: '2024-11-10',
    category: 'マンションと戸建て',
    tags: ['管理費', '修繕費', '専有部分'],
    featured: false,
    draft: false,
    readingTime: 6,
    author: 'takasaki',
    content: `
## 管理費とは何か

管理費は共用部分の維持管理に使われます。

## 修繕積立金とは何か

修繕積立金は将来の大規模修繕工事に備えた積立金です。

## 問題点

多くのマンションで修繕積立金が不足しており、将来値上がりするリスクがあります。
    `.trim(),
  },
  {
    slug: 'shinchiku-vs-chuko-thinking',
    title: '新築vs中古、何を基準に選ぶか',
    excerpt:
      '新築のメリットは分かりやすい。でも中古にも見逃せない価値があります。価格・性能・立地・リスクを軸に整理します。',
    coverImage: 'https://picsum.photos/seed/shinchiku/800/400',
    publishedAt: '2024-11-20',
    category: '新築と中古',
    tags: ['資産価値', '断熱', 'メンテナンス'],
    featured: true,
    draft: false,
    readingTime: 7,
    author: 'takasaki',
    content: `
## 新築の魅力と落とし穴

新築は品質保証があり安心感があります。しかし、引き渡し後すぐに価値が下がります。

## 中古の魅力

中古は価格が安い分、リノベーションに予算を使えます。

## 性能という観点

中古住宅は断熱性能が低いケースが多く、光熱費が高くなる可能性があります。
    `.trim(),
  },
  {
    slug: 'tatemono-vs-chukko-risk',
    title: '中古住宅購入のリスクと対策',
    excerpt: '中古住宅を購入する際に知っておきたいリスクと、そのチェックポイントを解説します。',
    coverImage: 'https://picsum.photos/seed/chuko/800/400',
    publishedAt: '2024-12-01',
    category: '新築と中古',
    tags: ['契約書', '外壁', '屋根'],
    featured: false,
    draft: false,
    readingTime: 5,
    author: 'takasaki',
    content: `
## インスペクションの重要性

中古住宅を購入する前に、インスペクション（住宅診断）を実施することが重要です。

## 確認すべき箇所

外壁、屋根、基礎、給排水管などを確認します。

## 契約書のチェックポイント

瑕疵担保責任の範囲と期間を必ず確認しましょう。
    `.trim(),
  },
  {
    slug: 'tateuri-vs-chukko-order',
    title: '建売vs注文住宅、どちらが得か',
    excerpt:
      '建売住宅と注文住宅の違いを整理します。コスト・自由度・スケジュール・品質の4つの軸で比較します。',
    coverImage: 'https://picsum.photos/seed/tateuri/800/400',
    publishedAt: '2024-12-10',
    category: '建売と注文住宅',
    tags: ['資産価値', '断熱'],
    featured: false,
    draft: false,
    readingTime: 6,
    author: 'takasaki',
    content: `
## 建売住宅とは

建売住宅は土地と建物をセットで販売する形式です。既に建てられているため、実物を見て購入できます。

## 注文住宅とは

注文住宅は間取りや仕様を自由に決められます。その分、コストと時間がかかります。

## 性能比較

注文住宅では断熱仕様を細かく指定できますが、建売では既定の仕様になります。
    `.trim(),
  },
  {
    slug: 'land-selection-basics',
    title: '土地選びで見るべき7つのポイント',
    excerpt:
      '土地選びは住宅購入の中で最も重要な意思決定の一つです。場所、広さ、形状、法規制、地盤など、見るべきポイントを整理します。',
    coverImage: 'https://picsum.photos/seed/land/800/400',
    publishedAt: '2024-12-20',
    category: '土地選び',
    tags: ['擁壁', '高低差', '契約書'],
    featured: true,
    draft: false,
    readingTime: 10,
    author: 'takasaki',
    content: `
## 立地の確認

最寄り駅からの距離、スーパー・病院・学校などの生活利便施設を確認します。

## 形状と面積

整形地か旗竿地かで建物の設計に大きく影響します。

## 高低差と擁壁

高低差のある土地では擁壁の状態確認が必須です。古い擁壁は造り替えが必要になる場合があります。

## 地盤調査

地盤の強度は建物の安全性と基礎工事コストに直結します。
    `.trim(),
  },
  {
    slug: 'youseki-and-height-difference',
    title: '擁壁と高低差のある土地を買うリスク',
    excerpt:
      '高低差のある土地の擁壁問題は、購入後に大きなコスト負担になる可能性があります。何を確認すればいいかを解説します。',
    coverImage: 'https://picsum.photos/seed/youseki/800/400',
    publishedAt: '2025-01-05',
    category: '土地選び',
    tags: ['擁壁', '高低差'],
    featured: false,
    draft: false,
    readingTime: 7,
    author: 'takasaki',
    content: `
## 擁壁とは

擁壁は傾斜地や段差のある土地で、土砂の崩落を防ぐための壁です。

## 擁壁の問題点

古い擁壁は検査済証がないものが多く、建て替え時に行政の指導が入る場合があります。

## 確認方法

購入前に擁壁の種類（RC擁壁、間知ブロックなど）と築年数を確認しましょう。
    `.trim(),
  },
  {
    slug: 'housing-performance-basics',
    title: '住宅性能の基礎知識：断熱・気密・換気',
    excerpt:
      '断熱、気密、換気は住宅の快適性と省エネ性能を決める三大要素です。それぞれの意味と重要性を分かりやすく解説します。',
    coverImage: 'https://picsum.photos/seed/dannetsu/800/400',
    publishedAt: '2025-01-15',
    updatedAt: '2025-02-01',
    category: '住宅性能',
    tags: ['断熱', '気密', 'UA値'],
    featured: true,
    draft: false,
    readingTime: 9,
    author: 'takasaki',
    content: `
## 断熱とは

断熱は外気の影響を遮断し、室内の温度を保つための技術です。断熱材の種類と厚みが性能を決めます。

## 気密とは

気密は隙間風を防ぎ、計画的な換気を実現するための概念です。C値（相当隙間面積）で表されます。

## UA値とは

UA値（外皮平均熱貫流率）は建物全体の断熱性能を示す指標です。値が小さいほど断熱性能が高い。

## 換気の重要性

高気密住宅では計画的な換気が必要です。24時間換気システムを適切に設計することが重要です。
    `.trim(),
  },
  {
    slug: 'ua-value-bei-explained',
    title: 'UA値とBEI──住宅の省エネ基準を理解する',
    excerpt:
      'UA値とBEIは住宅の省エネ性能を示す2つの重要な指標です。これらを理解することで、住宅選びの基準が明確になります。',
    coverImage: 'https://picsum.photos/seed/uavalue/800/400',
    publishedAt: '2025-01-25',
    category: '住宅性能',
    tags: ['UA値', 'BEI', '断熱'],
    featured: false,
    draft: false,
    readingTime: 6,
    author: 'takasaki',
    content: `
## UA値（外皮平均熱貫流率）

UA値は建物の断熱性能を示します。地域によって基準値が異なります。

## BEI（一次エネルギー消費量等級）

BEIは建物の設計一次エネルギー消費量と基準一次エネルギー消費量の比率です。

## ZEHとの関係

ZEH（ネット・ゼロ・エネルギー・ハウス）を実現するには、UA値とBEIの両方を基準以下にする必要があります。
    `.trim(),
  },
  {
    slug: 'maintenance-cost-comparison',
    title: 'マンションと戸建ての修繕費を比較する',
    excerpt:
      'マンションの修繕積立金と戸建ての修繕費、実際どちらが多くかかるのか。30年間の試算をもとに比較します。',
    coverImage: 'https://picsum.photos/seed/repair/800/400',
    publishedAt: '2025-02-01',
    category: '修繕費と維持費',
    tags: ['修繕費', '外壁', '屋根', 'メンテナンス'],
    featured: false,
    draft: false,
    readingTime: 7,
    author: 'takasaki',
    content: `
## マンションの修繕積立金

修繕積立金は大規模修繕（外壁塗装、屋上防水など）のための費用です。

## 戸建ての修繕費

戸建ては自分でメンテナンス計画を立てる必要があります。外壁・屋根は10〜15年ごとに補修が必要です。

## 30年間の試算

マンション：修繕積立金合計＋一時金徴収リスク
戸建て：定期メンテナンス費用＋設備交換費用

どちらも総額で200〜400万円程度の維持費がかかります。
    `.trim(),
  },
  {
    slug: 'housing-loan-basics',
    title: '住宅ローンの基礎：固定金利vs変動金利',
    excerpt:
      '住宅ローンを選ぶ際に最初に直面する選択が、固定金利と変動金利の比較です。それぞれのメリット・デメリットを整理します。',
    coverImage: 'https://picsum.photos/seed/loan/800/400',
    publishedAt: '2025-02-10',
    category: '資金計画',
    tags: ['契約書'],
    featured: false,
    draft: false,
    readingTime: 6,
    author: 'takasaki',
    content: `
## 変動金利のメリット

現在の低金利環境では、変動金利は月々の返済額を抑えられます。

## 変動金利のリスク

金利上昇リスクがあります。5年ルール・125%ルールがあるものの、金利が上がると返済総額が増加します。

## 固定金利のメリット

返済額が確定するため、ライフプランを立てやすいです。

## 選択基準

家計の余裕度、金利動向への考え方、返済期間によって最適な選択は異なります。
    `.trim(),
  },
  {
    slug: 'what-is-wellnest-home',
    title: 'WELLNEST HOMEとは何か',
    excerpt:
      '高性能住宅の中でも特に注目しているWELLNEST HOME。その特徴、性能数値、他社との違いを調べてまとめます。',
    coverImage: 'https://picsum.photos/seed/wellnest/800/400',
    publishedAt: '2025-02-20',
    updatedAt: '2025-03-01',
    category: 'WELLNEST HOME',
    tags: ['断熱', '気密', 'UA値', 'BEI'],
    featured: true,
    draft: false,
    readingTime: 8,
    author: 'takasaki',
    content: `
## WELLNEST HOMEの特徴

WELLNEST HOMEは高断熱・高気密・長寿命を追求した住宅メーカーです。

## 性能数値

UA値は0.2〜0.3程度、C値は0.1〜0.3程度を実現しています。

## 構造の特徴

木造軸組工法に独自の断熱システムを組み合わせています。

## 他社との比較

一般的なハウスメーカーと比べて断熱性能は数段上ですが、価格も高めです。
    `.trim(),
  },
  {
    slug: 'home-building-overall-picture',
    title: '家づくりの全体像と意思決定の順序',
    excerpt:
      '家づくりは複数の大きな意思決定の連続です。どの順番で考え、何を優先すべきかを整理します。このブログで発信していく内容のロードマップです。',
    coverImage: 'https://picsum.photos/seed/overview/800/400',
    publishedAt: '2024-10-15',
    category: '家づくり全体像',
    tags: ['資産価値'],
    featured: true,
    draft: false,
    readingTime: 5,
    author: 'takasaki',
    content: `
## 家づくりの大きな流れ

1. マンションvs戸建てを決める
2. 新築vs中古を決める
3. 建売vs注文住宅を決める
4. 土地を選ぶ
5. 住宅性能の基準を決める
6. 住宅会社を選ぶ
7. 資金計画を立てる

## このブログで発信すること

各ステップでの意思決定プロセスを、自分の経験と調査をもとに整理して発信します。

## 読む順番

まずこの記事でロードマップを把握し、気になるカテゴリから読み進めてください。
    `.trim(),
  },
  {
    slug: 'ryote-torihiki-risk',
    title: '仲介の両手取引とは何か、なぜ問題なのか',
    excerpt:
      '不動産仲介における「両手取引」は買主にとって不利になるリスクがあります。その仕組みと注意点を解説します。',
    coverImage: 'https://picsum.photos/seed/ryote/800/400',
    publishedAt: '2025-03-01',
    category: '土地選び',
    tags: ['両手取引', '契約書'],
    featured: false,
    draft: false,
    readingTime: 5,
    author: 'takasaki',
    content: `
## 両手取引とは

1つの不動産取引で、売主と買主の両方から仲介手数料を受け取る形態です。

## なぜ問題なのか

両手取引では仲介業者が売主・買主両方の代理人になるため、利益相反が生じる可能性があります。

## 対策

「買主側専任」の仲介業者を選ぶか、両手取引の可能性を事前に確認することが重要です。
    `.trim(),
  },
  {
    slug: 'insulation-material-comparison',
    title: '断熱材の種類と選び方',
    excerpt:
      'グラスウール、セルロースファイバー、吹き付けウレタンなど断熱材には様々な種類があります。それぞれの特徴と選び方を解説します。',
    coverImage: 'https://picsum.photos/seed/insulation/800/400',
    publishedAt: '2025-03-10',
    category: '住宅性能',
    tags: ['断熱', '気密', 'メンテナンス'],
    featured: false,
    draft: false,
    readingTime: 7,
    author: 'takasaki',
    content: `
## 主な断熱材の種類

1. グラスウール：コストパフォーマンスが高い
2. セルロースファイバー：調湿性能・防音効果あり
3. 吹き付けウレタンフォーム：気密性を同時に確保できる
4. フェノールフォーム：薄くても高い断熱性能

## 選び方のポイント

断熱性能だけでなく、施工精度、経年劣化、コストを総合的に評価しましょう。
    `.trim(),
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured && !p.draft)
}

export function getLatestPosts(count = 5): Post[] {
  return [...posts]
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category && !p.draft)
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag as any) && !p.draft)
}

export function getRelatedPosts(post: Post, count = 3): Post[] {
  return posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        !p.draft &&
        (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, count)
}

export function getAllCategories(): string[] {
  const cats = new Set(posts.filter((p) => !p.draft).map((p) => p.category))
  return Array.from(cats)
}

export function getAllTags(): string[] {
  const tags = new Set(posts.filter((p) => !p.draft).flatMap((p) => p.tags))
  return Array.from(tags)
}
