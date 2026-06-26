import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FadeInView, GlassCard } from '../components/Shared';
import { motion } from 'framer-motion';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: '创新驱动',
    description: '持续探索前沿技术，以 AI 为核心驱动力，不断突破产品和服务的边界，为用户创造前所未有的价值。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12.5A7.5 7.5 0 0112 5h.5a7.5 7.5 0 017.5 7.5v1a7.5 7.5 0 01-7.5 7.5H12A7.5 7.5 0 013 13.5v-1z" />
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
        <path d="M12 2v3" />
      </svg>
    ),
    title: '用户至上',
    description: '每一项决策都从用户需求出发，用心打磨每个产品细节，提供极致的使用体验和专业的技术支持。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: '追求卓越',
    description: '对品质有执念，对细节不妥协。以最高的标准要求自己，持续优化产品性能和服务质量。',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="12" r="3" />
        <circle cx="9" cy="17" r="3" />
        <path d="M11.5 9.5l3 2" />
        <path d="M11.5 14.5l3-2" />
      </svg>
    ),
    title: '开放协作',
    description: '打破壁垒，鼓励跨团队协作与知识共享。汇聚集体智慧，共同成长，共创共赢的技术生态。',
  },
];

const milestones = [
  {
    quarter: '2024 Q1',
    title: 'Nova 成立，获得天使轮融资',
    description: '由一群 AI 技术极客创立，凭借创新的产品理念获得顶级投资机构青睐。',
    color: 'bg-accent-500',
  },
  {
    quarter: '2024 Q3',
    title: '发布首个 AI 产品，注册用户突破 10 万',
    description: '核心产品正式上线，凭借出色的用户体验迅速积累首批忠实用户。',
    color: 'bg-emerald-500',
  },
  {
    quarter: '2025 Q2',
    title: '完成 A 轮融资，团队扩张至 50 人',
    description: '产品矩阵不断完善，获得资本市场认可，团队规模快速增长。',
    color: 'bg-violet-500',
  },
  {
    quarter: '2026 Q1',
    title: '服务用户突破 100 万，正式开启全球化布局',
    description: '业务覆盖 30+ 国家，建立全球化服务体系，成为行业领先的 AI 平台。',
    color: 'bg-amber-500',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-dark-950 pt-16">
      <Navbar />

      {/* ─────────── HERO ─────────── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-medium text-accent-300 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
              关于我们
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 gradient-text"
          >
            关于 Nova
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Nova 致力于通过前沿的人工智能技术，为全球企业和个人提供智能、高效、安全的数字解决方案。
            <br className="hidden sm:block" />
            我们的使命是让每个人都能够轻松享受 AI 带来的价值，推动数字世界的智能化转型。
          </motion.p>

          {/* Stats Row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '2024', label: '成立于' },
              { value: '50+', label: '团队成员' },
              { value: '100万+', label: '服务用户' },
              { value: '30+', label: '覆盖国家' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-dark-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────── 使命愿景 ─────────── */}
      <section className="relative py-28 md:py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInView delay={0}>
              <GlassCard className="p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 text-accent-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-4">使命</h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  以 AI 技术赋能数字化转型，让每一个组织和个人都能借助智能工具突破能力边界。
                  我们坚信技术应当普惠，通过持续创新降低 AI 应用门槛，推动数字经济的包容性增长。
                </p>
              </GlassCard>
            </FadeInView>

            <FadeInView delay={0.15}>
              <GlassCard className="p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 text-accent-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-4">愿景</h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  成为全球领先的 AI 驱动技术平台，重新定义人机协作的方式。
                  我们期待一个由 AI 全面赋能的世界，每个人都能释放创造力，专注于真正重要的事情。
                </p>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ─────────── 团队价值观 ─────────── */}
      <section className="relative py-28 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-16">
            <h2 className="section-title mb-4">我们的价值观</h2>
            <p className="section-subtitle">这些核心价值观驱动着 Nova 的每一个决策和行动</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="p-8 h-full group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 text-accent-400 group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 发展历程 ─────────── */}
      <section className="relative py-28 md:py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <FadeInView className="text-center mb-16">
            <h2 className="section-title mb-4">发展历程</h2>
            <p className="section-subtitle">从构想到全球布局，每一步都坚实有力</p>
          </FadeInView>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-500/40 via-white/[0.06] to-transparent" />

            <div className="flex flex-col gap-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Dot */}
                  <div className={`absolute left-[18px] md:left-[26px] top-1 w-6 h-6 md:w-7 md:h-7 rounded-full ${milestone.color} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 0 20px ${milestone.color === 'bg-accent-500' ? 'rgba(59,130,246,0.3)' : milestone.color === 'bg-emerald-500' ? 'rgba(16,185,129,0.3)' : milestone.color === 'bg-violet-500' ? 'rgba(139,92,246,0.3)' : 'rgba(245,158,11,0.3)'}` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <GlassCard className="p-6 md:p-8">
                    <span className={`inline-block text-xs font-semibold tracking-wider uppercase mb-2 ${milestone.color === 'bg-accent-500' ? 'text-accent-400' : milestone.color === 'bg-emerald-500' ? 'text-emerald-400' : milestone.color === 'bg-violet-500' ? 'text-violet-400' : 'text-amber-400'}`}>
                      {milestone.quarter}
                    </span>
                    <h3 className="text-white font-semibold text-base md:text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative py-28 md:py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-600/8 rounded-full blur-[120px]" />
        </div>

        <FadeInView className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6 text-balance">
            加入 Nova，共创未来
          </h2>
          <p className="text-dark-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            无论你是开发者、设计师还是创业者，Nova 都欢迎你的加入
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="btn-accent px-10 py-4 text-base">
              加入我们
            </button>
            <button className="btn-ghost px-10 py-4 text-base">
              联系我们
            </button>
          </div>
        </FadeInView>
      </section>

      <Footer />
    </div>
  );
}
