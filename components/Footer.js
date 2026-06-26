import Link from 'next/link';

const footerLinks = {
  产品: [
    { label: '功能特性', href: '#' },
    { label: '定价方案', href: '#' },
    { label: '更新日志', href: '#' },
    { label: 'API 文档', href: '#' },
  ],
  公司: [
    { label: '关于我们', href: '/about' },
    { label: '联系我们', href: '/contact' },
    { label: '加入我们', href: '#' },
    { label: '博客', href: '#' },
  ],
  支持: [
    { label: '帮助中心', href: '#' },
    { label: '服务状态', href: '#' },
    { label: '社区', href: '#' },
    { label: '隐私政策', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold text-base">ResHub</span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              以资源管理为核心的协作平台，重新定义团队效率与知识沉淀的方式。
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white text-sm font-semibold mb-4">{group}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-dark-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs">
            © 2026 ResHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'Discord'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-dark-500 hover:text-white text-xs transition-colors duration-200"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
