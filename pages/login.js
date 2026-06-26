import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { auth, createGuestUser } from "../lib/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = createGuestUser(email ? email.split("@")[0] : "用户", email);
    auth.login(user);
    router.push("/test-app/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-accent-950/40 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-600/10 via-transparent to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-600/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass w-full max-w-md rounded-2xl p-8 sm:p-10 relative z-10 mx-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/25">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M8 12h8M12 8v8" />
            </svg>
          </div>
          <span className="text-2xl font-bold gradient-text">ResHub</span>
        </Link>

        <h1 className="text-2xl font-semibold text-white text-center">欢迎回来</h1>
        <p className="mt-2 text-sm text-dark-400 text-center">登录您的账户继续使用资源中心</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-1.5">邮箱地址</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="input-field w-full" required />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-dark-300">密码</label>
              <span className="text-xs text-dark-500 cursor-default">忘记密码？</span>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="input-field w-full" required />
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="sr-only" />
              <div className={`h-5 w-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${remember ? "border-accent-500 bg-accent-500/20" : "border-dark-600 bg-transparent group-hover:border-dark-500"}`}>
                {remember && (
                  <svg className="h-3 w-3 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-dark-400 group-hover:text-dark-300 transition-colors">记住我</span>
          </label>

          <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="btn-accent w-full">
            登录
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-dark-500">
          还没有账户？{" "}
          <Link href="/test-app/register" className="font-medium text-accent-400 hover:text-accent-300 transition-colors">
            注册
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
