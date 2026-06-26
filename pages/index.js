/*
 * layout: true
 */

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FadeInView, GlassCard, FeatureCard } from '../components/Shared';
import { motion } from 'framer-motion';
import games from '../data/games';

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

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h12l2 6-2 6H6L4 8l2-6z" />
        <path d="M6 14h12l2 6-2 6H6l-2-6 2-6z" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: '游戏库',
    description: '收录各类游戏资源，持续更新链接',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: '分类检索',
    description: '按类型、平台、年份快速筛选',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: '链接管理',
    description: '统一管理下载链接，标记可用状态',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '更新追踪',
    description: '记录资源更新历史，追踪链接有效性',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    ),
    title: '收藏夹',
    description: '收藏喜欢的资源，建立个人游戏库',
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
    title: '分享协作',
    description: '分享资源给朋友，共建资源列表',
  },
];

const categoryColors = {
  '动作冒险': 'from-emerald-400 to-emerald-600',
  '模拟经营': 'from-violet-400 to-violet-600',
  '角色扮演': 'from-amber-400 to-amber-600',
};

const statusStyles = {
  '可直接游玩': 'text-green-400 bg-green-500/10 border-green-500/20',
  '待测试': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  '链接失效': 'text-red-400 bg-red-500/10 border-red-500/20',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 overflow-hidden">
      <Navbar />

      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px]" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-[15%] left-[10%] w-16 h-16 border border-white/[0.06] rounded-xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[25%] right-[15%] w-10 h-10 bg-white/[0.02] rounded-full"
            animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[5%] w-20 h-20 border border-white/[0.04] rounded-2xl"
            animate={{ y: [0, -15, 0], rotate: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute bottom-[25%] right-[8%] w-12 h-12 border border-accent-500/10 rounded-lg"
            animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div
            className="absolute top-[40%] left-[20%] w-6 h-6 bg-accent-500/5 rounded"
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          <motion.div
            className="absolute top-[60%] right-[20%] w-8 h-8 border border-white/[0.03] rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
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
              游戏资源 · 持续更新
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 gradient-text text-balance"
          >
            资源中转站
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-dark-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            个人游戏资源导航站 — 收录、分类、管理你喜爱的游戏资源，一站式直达
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#latest" className="btn-accent px-8 py-3.5 text-base inline-flex items-center">
              浏览资源
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#features" className="btn-ghost px-8 py-3.5 text-base inline-flex items-center">
              功能一览
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-dark-500 text-xs font-medium tracking-widest uppercase">scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-dark-500 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ─────────── FEATURES ─────────── */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-20">
            <h2 className="section-title mb-4">功能特色</h2>
            <p className="section-subtitle">为游戏资源管理打造的实用工具</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── LATEST RESOURCES ─────────── */}
      <section id="latest" className="relative py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/5 rounded-full blur-[100px]" />
        </div>

        <FadeInView className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">最新资源</h2>
            <p className="section-subtitle">这里没有虚假的数据，只有真实的资源</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.slice(0, 3).map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="p-6 h-full flex flex-col">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[game.category] || 'from-accent-400 to-accent-600'} text-white shadow-lg shadow-accent-500/20`}>
                      {game.category}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyles[game.status] || 'text-dark-400 bg-dark-800/50 border-dark-700'}`}>
                      {game.status}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">{game.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed flex-1 mb-6">
                    {game.description}
                  </p>

                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-accent-300 hover:text-accent-200 transition-colors"
                  >
                    访问链接
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* ─────────── ALL RESOURCES ─────────── */}
      <section id="resources" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-16">
            <h2 className="section-title mb-4">全部资源</h2>
            <p className="section-subtitle">浏览收录的所有游戏资源</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="p-6 h-full flex flex-col">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[game.category] || 'from-accent-400 to-accent-600'} text-white shadow-lg shadow-accent-500/20`}>
                      {game.category}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyles[game.status] || 'text-dark-400 bg-dark-800/50 border-dark-700'}`}>
                      {game.status}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">{game.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed flex-1 mb-6">
                    {game.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-dark-600 text-xs">收录于 {game.addedAt}</span>
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-accent-300 border border-accent-500/20 rounded-lg hover:bg-accent-500/10 transition-colors"
                    >
                      访问链接
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-600/8 rounded-full blur-[120px]" />
        </div>

        <FadeInView className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6 text-balance">
            想要添加资源？
          </h2>
          <p className="text-dark-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            登录后即可管理您的资源列表
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/test-app/login" className="btn-accent px-10 py-4 text-base inline-flex items-center">
              进入控制台
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeInView>
      </section>

      <Footer />
    </div>
  );
}
