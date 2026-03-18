export type Category =
  | '家づくり全体像'
  | 'マンションと戸建て'
  | '新築と中古'
  | '建売と注文住宅'
  | '土地選び'
  | '住宅性能'
  | '修繕費と維持費'
  | '資金計画'
  | 'WELLNEST HOME'

export type Tag =
  | '修繕費'
  | '管理費'
  | '専有部分'
  | '両手取引'
  | '擁壁'
  | '高低差'
  | '契約書'
  | '断熱'
  | '気密'
  | 'UA値'
  | 'BEI'
  | '資産価値'
  | '外壁'
  | '屋根'
  | 'メンテナンス'

export interface Post {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  publishedAt: string
  updatedAt?: string
  category: Category
  tags: Tag[]
  featured: boolean
  draft: boolean
  readingTime: number // minutes
  author: string
  content: string
}

export interface CategoryInfo {
  slug: string
  label: Category
  description: string
  count?: number
}

export interface TagInfo {
  slug: string
  label: Tag
  count?: number
}

export interface Profile {
  name: string
  displayName: string
  bio: string
  longBio: string
  avatar: string
  twitter?: string
  github?: string
}
