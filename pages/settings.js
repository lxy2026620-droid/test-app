import Sidebar from '../components/Sidebar';
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

// ─── Notification Preferences ───
const notificationItems = [
  {
    label: '邮件通知',
    desc: '接收重要账户动态的邮件提醒',
    defaultOn: true,
  },
  {
    label: '推送通知',
    desc: '在浏览器中接收实时推送消息',
    defaultOn: true,
  },
  {
    label: '消息提醒',
    desc: '收到新消息时弹出通知',
    defaultOn: false,
  },
  {
    label: '系统更新',
    desc: '平台功能更新与维护通知',
    defaultOn: true,
  },
];

// ─── Device Data ───
const devices = [
  {
    name: 'Chrome on Windows',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    status: '当前设备',
    statusColor: 'text-accent-400',
    dotColor: 'bg-accent-500',
  },
  {
    name: 'Safari on iPhone',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    status: '2天前',
    statusColor: 'text-dark-400',
    dotColor: 'bg-dark-500',
  },
];

export default function Settings() {
  const [notifications, setNotifications] = useState(
    notificationItems.map((item) => item.defaultOn)
  );
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const toggleNotification = (index) => {
    setNotifications((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
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
            设置
          </h1>
          <p className="text-dark-400 text-sm mt-1">
            管理您的账户和偏好设置
          </p>
        </motion.div>

        {/* ─────── 个人资料 (Profile Settings) ─────── */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            个人资料
          </h2>

          <div className="space-y-5">
            {/* 用户名 */}
            <div>
              <label className="block text-dark-300 text-sm font-medium mb-1.5">
                用户名
              </label>
              <input
                type="text"
                className="input-field"
                defaultValue="王小明"
              />
            </div>

            {/* 邮箱 */}
            <div>
              <label className="block text-dark-300 text-sm font-medium mb-1.5">
                邮箱
              </label>
              <input
                type="email"
                className="input-field"
                defaultValue="wangxiaoming@example.com"
              />
            </div>

            {/* 个人简介 */}
            <div>
              <label className="block text-dark-300 text-sm font-medium mb-1.5">
                个人简介
              </label>
              <textarea
                className="input-field resize-none"
                rows={4}
                defaultValue="热爱技术与创新的产品经理，专注于用户体验设计与数据驱动决策。拥有五年互联网行业经验，曾主导多个千万级用户产品的设计与迭代。"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => showToast('保存功能开发中')}
                className="btn-accent px-6 py-2.5"
              >
                修改
              </button>
            </div>
          </div>
        </motion.div>

        {/* ─────── 通知偏好 (Notification Settings) ─────── */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            通知偏好
          </h2>

          <div className="space-y-0">
            {notificationItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-4 border-b border-white/[0.04] last:border-b-0"
              >
                <div className="pr-4">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-dark-400 mt-0.5">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications[i]}
                    onChange={() => toggleNotification(i)}
                  />
                  <div className="w-11 h-6 bg-dark-700 rounded-full peer peer-checked:bg-accent-500 peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500/40 transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-200 peer-checked:after:translate-x-5" />
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─────── 安全设置 (Security) ─────── */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            安全设置
          </h2>

          <div className="space-y-6">
            {/* 修改密码 */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-white">密码</p>
                <p className="text-xs text-dark-400 mt-0.5">
                  建议定期更换密码以保障账户安全
                </p>
              </div>
              <button
                onClick={() => showToast('修改密码功能开发中')}
                className="btn-ghost px-5 py-2 text-xs flex-shrink-0"
              >
                修改密码
              </button>
            </div>

            <div className="border-t border-white/[0.04]" />

            {/* 两步验证 */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-white">两步验证</p>
                <p className="text-xs text-dark-400 mt-0.5">
                  为账户添加额外安全保护层
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 glass rounded-full text-xs font-medium text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  未启用
                </span>
                <button
                  onClick={() => showToast('两步验证功能开发中')}
                  className="btn-accent px-5 py-2 text-xs"
                >
                  启用
                </button>
              </div>
            </div>

            <div className="border-t border-white/[0.04]" />

            {/* 登录设备 */}
            <div className="py-3">
              <p className="text-sm font-medium text-white mb-4">登录设备</p>
              <div className="space-y-3">
                {devices.map((device) => (
                  <div
                    key={device.name}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-dark-300 flex-shrink-0">
                      {device.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">
                        {device.name}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium flex-shrink-0 ${device.statusColor}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${device.dotColor}`} />
                      {device.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.04]" />

            {/* 最近登录 */}
            <div className="py-3">
              <p className="text-sm font-medium text-white mb-4">最近登录</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-xs text-dark-400 mb-1">IP 地址</p>
                  <p className="text-sm font-medium text-white">192.168.1.100</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-xs text-dark-400 mb-1">登录时间</p>
                  <p className="text-sm font-medium text-white">2026-06-25 14:32</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-xs text-dark-400 mb-1">登录地点</p>
                  <p className="text-sm font-medium text-white">中国 · 北京市</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─────── 主题偏好 (Theme) ─────── */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            主题偏好
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">深色模式</p>
              <p className="text-xs text-dark-400 mt-0.5">
                当前使用深色主题，提供更佳的视觉体验
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs font-medium text-accent-300">
              <span className="w-2 h-2 rounded-full bg-accent-500 shadow-sm shadow-accent-500/40" />
              已激活
            </span>
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
