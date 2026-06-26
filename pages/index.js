/*
 * layout: true
 */

import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import games from '../data/games';

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

const statusStyles = {
  '可直接游玩': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  '待测试': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  '链接失效': 'text-red-400 bg-red-500/10 border-red-500/20',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Sidebar>
        <motion.div className="space-y-8" variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeUp}>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">资源中心</h1>
            <p className="text-dark-400 text-sm mt-1">由管理员维护更新的资源列表</p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: '资源总数', value: games.length, icon: '📦' },
              { label: '可直接游玩', value: games.filter(g => g.status === '可直接游玩').length, icon: '✅' },
              { label: '待测试', value: games.filter(g => g.status === '待测试').length, icon: '⏳' },
              { label: '链接失效', value: games.filter(g => g.status === '链接失效').length, icon: '⚠️' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                全部资源
                <span className="text-dark-500 text-xs font-normal ml-1">共 {games.length} 项</span>
              </h3>
              {games.length > 0 ? (
                <div className="space-y-3">
                  {games.map((game) => (
                    <div key={game.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-white">{game.title}</h4>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${statusStyles[game.status] || 'text-dark-400 bg-white/[0.04] border-white/[0.06]'}`}>
                            {game.status}
                          </span>
                        </div>
                        <p className="text-xs text-dark-400 mb-1">{game.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-dark-500 text-[10px]">{game.category}</span>
                          <span className="text-dark-600 text-[10px]">收录于 {game.addedAt}</span>
                        </div>
                      </div>
                      <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn-accent px-4 py-2 text-xs flex-shrink-0 self-start sm:self-center inline-flex items-center gap-1.5">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        访问下载
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4 opacity-30">📦</div>
                  <p className="text-dark-400 text-sm">暂无资源，等待管理员更新</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Sidebar>
    </div>
  );
}
