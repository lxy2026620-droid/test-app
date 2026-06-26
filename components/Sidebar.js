import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComingSoonBadge } from './Shared';

const sidebarItems = [
  {
    group: '主菜单',
    items: [
      { label: '控制台', href: '/dashboard', icon: '◈' },
      { label: '个人中心', href: '/profile', icon: '◎' },
      { label: '消息中心', href: '#', icon: '◉', comingSoon: true },
      { label: '内容管理', href: '#', icon: '⊞', comingSoon: true },
    ],
  },
  {
    group: '工具',
    items: [
      { label: 'AI 服务', href: '#', icon: '◇', comingSoon: true },
      { label: '工具中心', href: '#', icon: '▣', comingSoon: true },
      { label: '文件管理', href: '#', icon: '⊟', comingSoon: true },
      { label: '数据面板', href: '#', icon: '▤', comingSoon: true },
    ],
  },
  {
    group: '系统',
    items: [
      { label: '设置', href: '/settings', icon: '⚙' },
      { label: '帮助', href: '#', icon: '?', comingSoon: true },
    ],
  },
];

export default function Sidebar({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col fixed left-0 top-0 bottom-0 bg-dark-950/90 backdrop-blur-2xl border-r border-white/[0.04] z-40 transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-60'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/[0.04]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            {!collapsed && <span className="font-semibold text-sm">Nova</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-6">
          {sidebarItems.map((group) => (
            <div key={group.group}>
              {!collapsed && (
                <p className="text-dark-500 text-[10px] font-semibold uppercase tracking-wider px-3 mb-2">
                  {group.group}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = router.pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-white/[0.06] text-white'
                          : item.comingSoon
                          ? 'text-dark-400 cursor-default'
                          : 'text-dark-300 hover:text-white hover:bg-white/[0.03]'
                      }`}
                      title={collapsed ? item.label : undefined}
                      onClick={item.comingSoon ? (e) => e.preventDefault() : undefined}
                    >
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs">
                        {item.icon}
                      </span>
                      {!collapsed && (
                        <span className="flex-1 flex items-center justify-between gap-2">
                          <span>{item.label}</span>
                          {item.comingSoon && <ComingSoonBadge />}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-3 border-t border-white/[0.04]">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-xl text-dark-400 hover:text-white hover:bg-white/[0.03] transition-all duration-200"
          >
            <svg className={`w-4 h-4 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-dark-950/90 backdrop-blur-2xl border-b border-white/[0.04] z-40 flex items-center justify-between px-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-8 h-8 flex items-center justify-center"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-sm">Nova</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-dark-950 border-r border-white/[0.04] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-14 flex items-center justify-between px-4 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Nova</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="p-3 space-y-6">
                {sidebarItems.map((group) => (
                  <div key={group.group}>
                    <p className="text-dark-500 text-[10px] font-semibold uppercase tracking-wider px-3 mb-2">{group.group}</p>
                    <div className="space-y-0.5">
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => { if (!item.comingSoon) setMobileOpen(false); }}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                            router.pathname === item.href
                              ? 'bg-white/[0.06] text-white'
                              : item.comingSoon
                              ? 'text-dark-400 cursor-default'
                              : 'text-dark-300 hover:text-white hover:bg-white/[0.03]'
                          }`}
                        >
                          <span className="w-4 h-4 flex items-center justify-center text-xs">{item.icon}</span>
                          <span className="flex-1 flex items-center justify-between gap-2">
                            <span>{item.label}</span>
                            {item.comingSoon && <ComingSoonBadge />}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${'md:ml-60'} pt-14 md:pt-0`}>
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
