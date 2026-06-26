import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  {
    group: '导航',
    items: [
      { label: '资源中心', href: '/', icon: '◈' },
    ],
  },
  {
    group: '链接',
    items: [
      { label: '关于本站', href: '/about', icon: '◎' },
      { label: '联系', href: '/contact', icon: '✉' },
    ],
  },
];

export default function Sidebar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 bg-dark-950/90 backdrop-blur-2xl border-r border-white/[0.04] z-40 w-48">
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/[0.04]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M8 12h8M12 8v8" />
              </svg>
            </div>
            <span className="font-semibold text-sm">ResHub</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-6">
          {sidebarItems.map((group) => (
            <div key={group.group}>
              <p className="text-dark-500 text-[10px] font-semibold uppercase tracking-wider px-3 mb-2">
                {group.group}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-dark-300 hover:text-white hover:bg-white/[0.03]"
                  >
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/[0.04]">
          <p className="text-dark-500 text-[10px] text-center">资源由管理员维护</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-dark-950/90 backdrop-blur-2xl border-b border-white/[0.04] z-40 flex items-center justify-between px-4">
        <button onClick={() => setMobileOpen(true)} className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M8 12h8M12 8v8" />
            </svg>
          </div>
          <span className="font-semibold text-sm">ResHub</span>
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
              className="fixed left-0 top-0 bottom-0 w-56 bg-dark-950 border-r border-white/[0.04] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-14 flex items-center justify-between px-4 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">ResHub</span>
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
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-dark-300 hover:text-white hover:bg-white/[0.03]"
                        >
                          <span className="w-4 h-4 flex items-center justify-center text-xs">{item.icon}</span>
                          {item.label}
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
      <main className="flex-1 md:ml-48 pt-14 md:pt-0">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
