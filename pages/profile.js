import Sidebar from '../components/Sidebar';
import { FadeInView } from '../components/Shared';
import { motion } from 'framer-motion';

const infoFields = [
  { label: '姓名', value: '王晓' },
  { label: '邮箱', value: 'wangxiao@nova.com' },
  { label: '手机', value: '+86 138-0000-8888' },
  { label: '部门', value: '产品设计部' },
  { label: '职位', value: '高级产品经理' },
];

const bookmarkItems = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'AI 产品设计指南',
    category: '文档',
    date: '2025-08-15',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'UX 设计系统规范',
    category: '文档',
    date: '2025-08-12',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '2025 设计趋势报告',
    category: '报告',
    date: '2025-08-10',
  },
];

const achievements = [
  { icon: '🏆', title: '最佳项目奖', description: '2025 Q2 优秀项目' },
  { icon: '🥇', title: '金牌讲师', description: '内部培训 50+ 场' },
  { icon: '⭐', title: '创新之星', description: '3 项专利提交' },
  { icon: '🎯', title: '目标达人', description: '连续 6 月达成 KPI' },
];

const skillTags = ['产品设计', '用户体验', '数据分析', '项目管理', 'AI 应用', '团队协作'];

export default function Profile() {
  return (
    <Sidebar>
      {/* ─────────── Profile Header ─────────── */}
      <FadeInView>
        <div className="flex items-center gap-6 mb-10 p-8 glass rounded-2xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg shadow-accent-500/20">
            王
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold gradient-text mb-1">王晓</h1>
            <p className="text-dark-400 text-sm mb-1">wangxiao@nova.com</p>
            <p className="text-dark-500 text-xs">2025年8月加入</p>
          </div>
          <button className="btn-ghost px-5 py-2.5 text-sm flex-shrink-0">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            编辑资料
          </button>
        </div>
      </FadeInView>

      {/* ─────────── Info Grid ─────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Left: 个人信息 */}
        <FadeInView>
          <div className="glass rounded-2xl p-6 h-full">
            <h2 className="text-white font-semibold text-base mb-6 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              个人信息
            </h2>
            <div className="space-y-4">
              {infoFields.map((field) => (
                <div
                  key={field.label}
                  className="flex items-center justify-between py-2.5 px-4 bg-white/[0.02] rounded-xl"
                >
                  <span className="text-dark-400 text-sm">{field.label}</span>
                  <span className="text-white text-sm font-medium">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Right: 个人简介 */}
        <FadeInView delay={0.1}>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                个人简介
              </h2>
              <p className="text-dark-300 text-sm leading-relaxed">
                拥有 8 年产品设计经验，专注于 AI 领域的产品规划与用户体验设计。擅长从用户需求出发，
                结合数据驱动的方法论，打造有影响力的产品。曾主导多个从 0 到 1 的成功项目，
                对智能工具和效率类产品有深刻理解。业余时间热爱写作和分享，是公司内部设计社区的活跃贡献者。
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                技能标签
              </h2>
              <div className="flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </div>

      {/* ─────────── 收藏内容 ─────────── */}
      <FadeInView>
        <div className="mb-10">
          <h2 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            收藏内容
            <span className="text-dark-500 text-xs font-normal ml-1">共 12 项</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bookmarkItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass rounded-2xl p-5 glass-hover cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 text-accent-400 group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-dark-400 text-[10px] font-medium">
                    {item.category}
                  </span>
                  <span className="text-dark-500 text-xs">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* ─────────── 成就展示 ─────────── */}
      <FadeInView>
        <div>
          <h2 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            成就展示
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass rounded-2xl p-6 text-center glass-hover group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-400/20 to-accent-600/10 border border-accent-500/20 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 group-hover:border-accent-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-dark-400 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>
    </Sidebar>
  );
}
