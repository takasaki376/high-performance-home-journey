import type { Profile } from './types'

export const profile: Profile = {
  name: 'takasaki',
  displayName: 'たかさき',
  bio: '高性能住宅を探し続けるエンジニア。マンションか戸建てか、新築か中古か、あらゆる選択肢を論理的に整理して家づくりの意思決定をしています。',
  longBio: `
エンジニアとして論理的な思考を活かし、住宅選びに臨んでいます。

「家を買う」という人生最大の意思決定を、感情ではなくファクトとロジックで行いたい。
そのために調べたこと、考えたこと、気づいたことをこのブログにまとめています。

現在は高性能住宅（特に断熱・気密性能を重視した住宅）に絞って検討中。
WELLNEST HOMEをはじめとする高断熱住宅メーカーを研究しています。
  `.trim(),
  avatar: 'https://picsum.photos/seed/profile/200/200',
  github: 'https://github.com/takasaki376',
}
