import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FadeInView, GlassCard } from '../components/Shared';

const faqData = [
  {
    question: '如何开始使用 Nova？',
    answer:
      '注册 Nova 账号后，您可以直接在控制台创建您的第一个项目。我们提供了丰富的模板和文档，帮助您快速上手。您也可以预约我们的技术团队进行一对一引导。',
  },
  {
    question: 'Nova 支持哪些平台？',
    answer:
      'Nova 支持 Web、iOS、Android 以及桌面端（Windows / macOS / Linux）。通过统一的 API 接口，您可以轻松实现多平台数据同步与业务逻辑复用。',
  },
  {
    question: '如何联系技术支持？',
    answer:
      '您可以通过页面底部的联系表单提交工单，或直接发送邮件至 support@nova.com。我们的技术支持团队会在 24 小时内响应。企业客户还可享受专属 VIP 技术支持通道。',
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <GlassCard className="mb-4 overflow-hidden">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left text-white/90 transition-colors hover:text-white"
        onClick={onToggle}
      >
        <span className="text-base font-medium">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-5 w-5 flex-shrink-0 text-accent-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-white/60">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-dark-950 pt-16">
      <Navbar />

      {/* ---- Header ---- */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView>
            <h1 className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              联系我们
            </h1>
            <p className="mt-4 text-lg text-white/50">有任何问题或建议？我们期待您的来信</p>
          </FadeInView>
        </div>
      </section>

      {/* ---- Contact Info Row ---- */}
      <section className="relative px-4 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {/* 电子邮件 */}
          <FadeInView>
            <GlassCard className="flex flex-col items-center px-6 py-8 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                电子邮件
              </h3>
              <p className="text-sm text-white/40">hello@nova.com</p>
            </GlassCard>
          </FadeInView>

          {/* 办公地址 */}
          <FadeInView>
            <GlassCard className="flex flex-col items-center px-6 py-8 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                办公地址
              </h3>
              <p className="text-sm text-white/40">北京市海淀区中关村科技园</p>
            </GlassCard>
          </FadeInView>

          {/* 联系电话 */}
          <FadeInView>
            <GlassCard className="flex flex-col items-center px-6 py-8 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                联系电话
              </h3>
              <p className="text-sm text-white/40">+86 400-888-8888</p>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* ---- Contact Form ---- */}
      <section className="relative px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <FadeInView>
            <GlassCard className="px-8 py-10 md:px-12">
              <h2 className="mb-8 text-center text-2xl font-bold text-white">发送消息</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">姓名</label>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">邮箱</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="input-field w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-white/60">主题</label>
                  <input
                    type="text"
                    placeholder="请输入主题"
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-white/60">消息</label>
                  <textarea
                    rows={4}
                    placeholder="请输入您的消息..."
                    className="input-field w-full"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-accent rounded-lg px-10 py-3 text-sm font-semibold">
                    发送消息
                  </button>
                </div>
              </form>
            </GlassCard>
          </FadeInView>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          <FadeInView>
            <h2 className="mb-10 text-center text-2xl font-bold text-white">常见问题</h2>
          </FadeInView>
          <div>
            {faqData.map((item, index) => (
              <FadeInView key={index}>
                <FaqItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
