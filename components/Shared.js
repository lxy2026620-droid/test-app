import { motion } from 'framer-motion';
import { useState } from 'react';

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export function FadeInView({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${
        hover ? 'glass-hover' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function StatCard({ value, label, sub }) {
  return (
    <GlassCard className="text-center p-8">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {value}
      </div>
      <div className="text-dark-300 text-sm font-medium mb-0.5">{label}</div>
      {sub && <div className="text-dark-500 text-xs">{sub}</div>}
    </GlassCard>
  );
}

export function FeatureCard({ icon, title, description, delay = 0, comingSoon = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <GlassCard className={`p-8 h-full group cursor-default ${comingSoon ? 'relative' : ''}`}>
        {comingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <ComingSoonBadge />
          </div>
        )}
        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 text-accent-400 group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-dark-400 text-sm leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  );
}

export function DashboardCard({ title, children, className = '' }) {
  return (
    <GlassCard className={`p-6 ${className}`}>
      <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
      {children}
    </GlassCard>
  );
}

export function SidebarLink({ icon, label, active = false, href = '#' }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-white/[0.06] text-white'
          : 'text-dark-300 hover:text-white hover:bg-white/[0.03]'
      }`}
    >
      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">{icon}</span>
      {label}
    </a>
  );
}

// ─── Coming Soon Badge ───
export function ComingSoonBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-medium ${className}`}>
      <span className="w-1 h-1 rounded-full bg-amber-400" />
      即将推出
    </span>
  );
}

// ─── Coming Soon Overlay for full cards/sections ───
export function ComingSoonOverlay({ children, label = '即将推出' }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="px-3 py-1.5 glass rounded-lg text-xs font-medium text-amber-400 border border-amber-500/20 shadow-lg backdrop-blur-xl">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

// ─── Disabled button with tooltip ───
export function DisabledButton({ children, className = '', label = '开发中' }) {
  const [showTip, setShowTip] = useState(false);
  return (
    <div className="relative inline-flex">
      <button
        className={`cursor-not-allowed opacity-50 ${className}`}
        onClick={() => setShowTip(true)}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        disabled
      >
        {children}
      </button>
      {showTip && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 glass rounded-lg text-xs text-amber-400 border border-amber-500/20 z-50">
          {label}
        </span>
      )}
    </div>
  );
}
