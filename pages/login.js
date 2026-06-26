import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { auth, createGuestUser } from "../lib/auth";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 始终以默认用户名"用户"登录
    const user = createGuestUser("用户", "user@reshub.local");
    auth.login(user);
    router.push("/test-app/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass w-full max-w-md rounded-2xl p-8 sm:p-10 relative z-10 mx-4"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/25">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M8 12h8M12 8v8" />
            </svg>
          </div>
          <span className="text-2xl font-bold gradient-text">ResHub</span>
        </div>

        <h1 className="text-2xl font-semibold text-white text-center">进入资源中心</h1>
        <p className="mt-2 text-sm text-dark-400 text-center">输入密码或直接进入</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-1.5">访问密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="留空直接进入"
              className="input-field w-full"
            />
            <p className="text-xs text-dark-500 mt-1.5">密码暂未启用，直接点击进入即可</p>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="btn-accent w-full"
          >
            进入控制台
          </motion.button>
        </form>

        <p className="mt-6 text-center text-xs text-dark-500">
          默认以「用户」身份登录，可在设置中修改昵称
        </p>
      </motion.div>
    </div>
  );
}
