import Sidebar from '../components/Sidebar';
import { ComingSoonBadge } from '../components/Shared';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Stats Data ───
const stats = [
  { label: '总项目', value: 28, icon: '⊞' },
  { label: '进行中', value: 12, icon: '◉' },
  { label: '已完成', value: 156, icon: '✓' },
  { label: '团队', value: 8, icon: '♢' },
];

// ─── Quick Actions ───
const quickActions = [
  {
    label: '新建项目',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
  {
    label: 'AI 助手',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M18.5 14.5A8 8 0 0012 6a8 8 0 00-6.5 8.5" />
        <path d="M20 22v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      </svg>
    ),
  },
  {
    label: '上传文件',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    label: '查看报表',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

// ─── Activity Data ───
const activities = [
  {
    dot: 'bg-accent-500',
    title: '完成了数据分析报告',
    time: '2 分钟前',
  },
  {
    dot: 'bg-emerald-500',
    title: '创建了新项目「市场调研」',
    time: '15 分钟前',
  },
  {
    dot: 'bg-blue-500',
    title: '邀请了团队成员 李华',
    time: '1 小时前',
  },
  {
    dot: 'bg-amber-500',
    title: '更新了 UI 设计稿 v3.2',
    time: '3 小时前',
  },
  {
    dot: 'bg-violet-500',
    title: '完成系统配置优化',
    time: '昨天',
  },
];

// ─── Chart Data ───
const chartData = [
  { label: 'Q1', value: 42, barColor: 'from-accent-500 to-accent-400' },
  { label: 'Q2', value: 78, barColor: 'from-accent-500 to-accent-400' },
  { label: 'Q3', value: 53, barColor: 'from-accent-500 to-accent-400' },
  { label: 'Q4', value: 96, barColor: 'from-accent-500 to-accent-400' },
];
const maxChartValue = 100;

export default function Dashboard() {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };
  return (
    <Sidebar>
      <motion.div
        className="space-y-8"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {/* ─────── Page Header ─────── */}
        <motion.div variants={fadeUp}>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            控制台
          </h1>
          <p className="text-dark-400 text-sm mt-1">
            欢迎回来，这里是您的总览面板
          </p>
        </motion.div>

        {/* ─────── User Welcome Card ─────── */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent-500/20 flex-shrink-0">
              张
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-white">张明</h2>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-dark-400 text-sm">高级用户</span>
                <span className="w-1 h-1 rounded-full bg-dark-500" />
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 glass rounded-full text-xs font-medium text-accent-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Pro 会员
                </span>
              </div>
            </div>
            <button
              className="btn-ghost px-4 py-2 text-xs flex-shrink-0 hidden sm:inline-flex"
              onClick={() => showToast('编辑资料功能开发中')}
            >
              编辑资料
            </button>
          </div>
        </motion.div>

        {/* ─────── Stats Row ─────── */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-hover rounded-2xl p-5 text-center"
            >
              <div className="text-2xl mb-1 text-accent-400">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ─────── Quick Actions ─────── */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => showToast('功能开发中，敬请期待')}
              className="glass-hover rounded-2xl p-4 flex items-center gap-3 text-sm font-medium text-dark-400 hover:text-dark-400 transition-colors cursor-default relative group"
            >
              <span className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-accent-400/60 flex-shrink-0">
                {action.icon}
              </span>
              {action.label}
            </button>
          ))}
        </motion.div>

        {/* ─────── Bottom Row: Activity + Chart ─────── */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          {/* Recent Activity - takes 3 cols */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              最近活动
            </h3>

            <div className="space-y-0">
              {activities.map((item, i) => (
                <div key={i} className="flex gap-4 relative pb-6 last:pb-0">
                  {/* Timeline line */}
                  {i < activities.length - 1 && (
                    <div className="absolute left-[7px] top-4 bottom-0 w-px bg-white/[0.06]" />
                  )}

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className={`w-3.5 h-3.5 rounded-full ${item.dot} shadow-sm`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-dark-200">{item.title}</p>
                    <p className="text-xs text-dark-500 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Preview - takes 2 cols */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              数据概览
            </h3>

            {/* Simple CSS Bar Chart */}
            <div className="mt-8 flex items-end justify-between gap-3 h-48 px-1">
              {chartData.map((bar) => {
                const heightPct = (bar.value / maxChartValue) * 100;
                return (
                  <div key={bar.label} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                    {/* Value label */}
                    <span className="text-xs font-medium text-dark-300">
                      {bar.value}
                    </span>

                    {/* Bar */}
                    <div className="w-full max-w-[52px] h-full flex items-end">
                      <motion.div
                        className={`w-full rounded-lg bg-gradient-to-t ${bar.barColor} shadow-lg shadow-accent-500/10`}
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPct}%` }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>

                    {/* Axis label */}
                    <span className="text-xs text-dark-500 font-medium">
                      {bar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 glass rounded-xl border border-amber-500/20 shadow-lg"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {toast}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Sidebar>
  );
}
