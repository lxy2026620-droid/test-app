import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const getStrength = (pw) => {
    if (pw.length === 0) return 0;
    if (pw.length < 8) return 1;
    if (pw.length < 12) return 2;
    return 3;
  };

  const strength = getStrength(password);

  const strengthLabel = ["", "弱", "中等", "强"];
  const strengthColor = [
    "",
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/40 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass w-full max-w-md rounded-2xl p-8 sm:p-10 relative z-10 mx-4"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Nova
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl font-semibold text-white text-center">
          创建账户
        </h1>
        <p className="mt-2 text-sm text-gray-400 text-center">
          开始使用 Nova 的完整功能
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              姓名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="您的姓名"
              className="input-field w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              邮箱地址
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="input-field w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-field w-full"
              required
            />
            {/* Strength indicator */}
            {password.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-2 space-y-1"
              >
                <div className="flex gap-1">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        level <= strength
                          ? strengthColor[strength]
                          : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
                {strength >= 1 && (
                  <p
                    className={`text-xs ${
                      strength === 1
                        ? "text-red-400"
                        : strength === 2
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {strengthLabel[strength]}
                  </p>
                )}
              </motion.div>
            )}
            <p className="mt-1.5 text-xs text-gray-500">至少8个字符</p>
          </div>

          {/* Agreement checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`h-5 w-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                  agreed
                    ? "border-indigo-500 bg-indigo-500/20"
                    : "border-gray-600 bg-transparent group-hover:border-gray-500"
                }`}
              >
                {agreed && (
                  <svg
                    className="h-3 w-3 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-5">
              同意{" "}
              <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
                服务条款
              </span>{" "}
              与{" "}
              <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
                隐私政策
              </span>
            </span>
          </label>

          {/* Submit button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={!agreed}
            className={`btn-accent w-full opacity-60 cursor-default`}
          >
            创建账户
          </motion.button>
        </form>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          已有账户？{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            登录
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
