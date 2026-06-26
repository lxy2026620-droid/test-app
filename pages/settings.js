import Sidebar from '../components/Sidebar';
import AuthGuard from '../components/AuthGuard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { auth } from '../lib/auth';

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

const notificationItems = [
  { label: '邮件通知', desc: '接收重要账户动态的邮件提醒', key: 'email' },
  { label: '推送通知', desc: '在浏览器中接收实时推送消息', key: 'push' },
  { label: '消息提醒', desc: '收到新消息时弹出通知', key: 'message' },
  { label: '系统更新', desc: '平台功能更新与维护通知', key: 'system' },
];

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

const defaults = {
  name: '',
  email: '',
  bio: '',
  phone: '',
  dept: '',
  title: '',
};

export default function Settings() {
  const [form, setForm] = useState(defaults);
  const [notifications, setNotifications] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const user = auth.getUser();
    const savedProfile = JSON.parse(localStorage.getItem('reshub_profile') || '{}');
    const savedNotifs = JSON.parse(localStorage.getItem('reshub_notifications') || '{}');
    setForm({
      name: savedProfile.name || user?.name || '',
      email: savedProfile.email || user?.email || '',
      bio: savedProfile.bio || '',
      phone: savedProfile.phone || '',
      dept: savedProfile.dept || '',
      title: savedProfile.title || '',
    });
    setNotifications({
      email: savedNotifs.email ?? true,
      push: savedNotifs.push ?? true,
      message: savedNotifs.message ?? false,
      system: savedNotifs.system ?? true,
    });
  }, []);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const saveProfile = () => {
    localStorage.setItem('reshub_profile', JSON.stringify(form));
    // Also update auth user
    const user = auth.getUser();
    if (user) {
      auth.updateProfile({ name: form.name, email: form.email });
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleNotification = (key) => {
    const next = { ...notifications, [key]: !notifications[key] };
    setNotifications(next);
    localStorage.setItem('reshub_notifications', JSON.stringify(next));
  };

  return (
    <AuthGuard>
    <Sidebar>
      <motion.div className="space-y-8" variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeUp}>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">设置</h1>
          <p className="text-dark-400 text-sm mt-1">管理您的账户和偏好设置</p>
        </motion.div>

        {/* 个人资料 */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            个人资料
          </h2>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">姓名</label>
                <input type="text" className="input-field" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">邮箱</label>
                <input type="email" className="input-field" value={form.email} onChange={(e) => updateField('email', e.target.value)} />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">手机</label>
                <input type="text" className="input-field" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="+86 138-0000-0000" />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">部门</label>
                <input type="text" className="input-field" value={form.dept} onChange={(e) => updateField('dept', e.target.value)} placeholder="所在部门" />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">职位</label>
                <input type="text" className="input-field" value={form.title} onChange={(e) => updateField('title', e.target.value)} placeholder="职位名称" />
              </div>
            </div>
            <div>
              <label className="block text-dark-300 text-sm font-medium mb-1.5">个人简介</label>
              <textarea className="input-field resize-none" rows={4} value={form.bio} onChange={(e) => updateField('bio', e.target.value)} placeholder="简单介绍一下自己" />
            </div>
            <div className="flex justify-end items-center gap-4">
              {saved && <span className="text-xs text-emerald-400 font-medium">已保存 ✓</span>}
              <button onClick={saveProfile} className="btn-accent px-6 py-2.5">保存修改</button>
            </div>
          </div>
        </motion.div>

        {/* 通知偏好 */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            通知偏好
          </h2>
          <div className="space-y-0">
            {notificationItems.map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-white/[0.04] last:border-b-0">
                <div className="pr-4">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-dark-400 mt-0.5">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={notifications[item.key] ?? false} onChange={() => toggleNotification(item.key)} />
                  <div className="w-11 h-6 bg-dark-700 rounded-full peer peer-checked:bg-accent-500 peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500/40 transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-200 peer-checked:after:translate-x-5" />
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 安全设置 */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            安全设置
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-white">密码</p>
                <p className="text-xs text-dark-400 mt-0.5">建议定期更换密码以保障账户安全</p>
              </div>
              <span className="btn-ghost px-5 py-2 text-xs flex-shrink-0 inline-flex items-center opacity-50 cursor-default gap-1">
                <span className="text-[10px]">⏳</span>修改密码
              </span>
            </div>
            <div className="border-t border-white/[0.04]" />
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-white">两步验证</p>
                <p className="text-xs text-dark-400 mt-0.5">为账户添加额外安全保护层</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 glass rounded-full text-xs font-medium text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />未启用
                </span>
                <span className="btn-accent px-5 py-2 text-xs inline-flex items-center opacity-50 cursor-default gap-1">
                  <span className="text-[10px]">⏳</span>启用
                </span>
              </div>
            </div>
            <div className="border-t border-white/[0.04]" />
            <div className="py-3">
              <p className="text-sm font-medium text-white mb-4">登录设备</p>
              <div className="space-y-3">
                {devices.map((device) => (
                  <div key={device.name} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-dark-300 flex-shrink-0">{device.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{device.name}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium flex-shrink-0 ${device.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${device.dotColor}`} />{device.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/[0.04]" />
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

        {/* 主题偏好 */}
        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-base font-semibold text-white flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />主题偏好
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">深色模式</p>
              <p className="text-xs text-dark-400 mt-0.5">当前使用深色主题，提供更佳的视觉体验</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs font-medium text-accent-300">
              <span className="w-2 h-2 rounded-full bg-accent-500 shadow-sm shadow-accent-500/40" />已激活
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Sidebar>
    </AuthGuard>
  );
}
