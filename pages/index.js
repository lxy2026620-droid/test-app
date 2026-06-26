/*
 * layout: true
 */

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FadeInView, GlassCard, StatCard, FeatureCard } from '../components/Shared';
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

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI 智能助手',
    description: '基于先进大模型，提供智能对话、代码生成、内容创作等能力',
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
    title: '工具中心',
    description: '集成开发、设计、协作等专业工具，一站式工作平台',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: '数据洞察',
    description: '实时数据分析与可视化，让数据驱动决策',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: '安全可靠',
    description: '企业级安全防护，数据加密传输与存储',
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
    title: '协同工作',
    description: '多人实时协作，团队效率倍增',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: '开放生态',
    description: '丰富的 API 与插件系统，无限扩展可能',
  },
];

const testimonials = [
  {
    initials: '张',
    name: '张明远',
    role: 'TechCo 技术总监',
    quote: 'Nova 的 AI 助手让我们的开发效率提升了至少 40%。代码生成的质量令人惊叹，团队成员现在可以专注于更有创造性的工作。',
  },
  {
    initials: '李',
    name: '李思雨',
    role: 'DataFlow 创始人',
    quote: '数据洞察模块彻底改变了我们做决策的方式。可视化仪表盘让复杂数据一目了然，实时分析功能帮助我们抓住了多个市场机会。',
  },
  {
    initials: '王',
    name: '王浩然',
    role: 'CloudBase CTO',
    quote: '企业级的安全架构和开放的生态体系是我们选择 Nova 的关键。API 扩展能力极为出色，完美适配了我们的现有技术栈。',
  },
];

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
              新一代智能工作平台
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 gradient-text text-balance"
          >
            以 AI 驱动未来
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-dark-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nova 整合先进人工智能与专业工具，为现代团队打造
            <br className="hidden sm:block" />
            前所未有的高效工作体验
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/test-app/register" className="btn-accent px-8 py-3.5 text-base inline-flex items-center">
              开始使用
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#features" className="btn-ghost px-8 py-3.5 text-base inline-flex items-center">
              了解更多
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
            <h2 className="section-title mb-4">强大功能</h2>
            <p className="section-subtitle">为现代团队打造的全方位解决方案</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={i * 0.1}
                comingSoon={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section className="relative py-32 px-6">
        {/* Subtle background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/5 rounded-full blur-[100px]" />
        </div>

        <FadeInView className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard value="100万+" label="活跃用户" sub="覆盖全球 50+ 国家" />
            <StatCard value="99.9%" label="服务可用性" sub="全年无故障运行" />
            <StatCard value="50+" label="集成服务" sub="主流工具全接入" />
            <StatCard value="24/7" label="技术支持" sub="专业团队即时响应" />
          </div>
        </FadeInView>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-20">
            <h2 className="section-title mb-4">用户评价</h2>
            <p className="section-subtitle">来自行业领先团队的真实反馈</p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-accent-500/20">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.name}</div>
                      <div className="text-dark-400 text-xs">{item.role}</div>
                    </div>
                  </div>

                  {/* Quote icon */}
                  <svg className="w-6 h-6 text-accent-500/20 mb-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>

                  <p className="text-dark-300 text-sm leading-relaxed flex-1">
                    {item.quote}
                  </p>

                  {/* Star rating */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-accent-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
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
            准备好开启全新工作方式了吗？
          </h2>
          <p className="text-dark-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            加入数千家领先企业，体验 AI 驱动的未来工作平台
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/test-app/register" className="btn-accent px-10 py-4 text-base inline-flex items-center">
              免费开始使用
            </a>
            <a href="/test-app/contact" className="btn-ghost px-10 py-4 text-base inline-flex items-center">
              预约演示
            </a>
          </div>
        </FadeInView>
      </section>

      <Footer />
    </div>
  );
}
