import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: '首页', href: '/' },
  { label: '控制台', href: '/dashboard' },
  { label: '关于', href: '/about' },
  { label: '联系', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:shadow-accent-500/30 transition-shadow">
            <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-base tracking-tight">ResHub</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-sm ${
                router.pathname === item.href
                  ? 'text-white after:w-full'
                  : 'text-dark-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/test-app/login" className="btn-ghost px-4 py-2 text-xs">
            登录
          </Link>
          <Link href="/test-app/login" className="btn-primary px-4 py-2 text-xs">
            进入控制台
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    router.pathname === item.href
                      ? 'bg-white/[0.06] text-white'
                      : 'text-dark-300 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
          <Link href="/test-app/login" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center text-sm">
            进入控制台
          </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
