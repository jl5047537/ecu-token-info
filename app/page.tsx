'use client'

import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'
import Image from 'next/image'

const JETTON_MASTER = 'EQAlFh-_a1UbCPz119-FzTTLw0RQvaDTCBU4sCafh_n64SYo'
const UTILITY_CONTRACT = 'EQAohNdffFTjI2j4nYHsLIxp51cl23u37YS7IKwoT-md0WqZ'
const TREASURY_WALLET = 'UQBNw7jyLAhxt-m9CJLc9XZoMdo0J6OjxKN9h8tGAZvJqEsL'
const TONVIEWER_BASE = 'https://tonviewer.com'
const TELEGRAM_URL = 'https://t.me/ecuton'

function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex gap-1 text-sm text-slate-400">
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded transition-colors ${
          lang === 'en' ? 'text-cyan-400 font-medium' : 'hover:text-slate-300'
        }`}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => setLang('ru')}
        className={`px-2 py-1 rounded transition-colors ${
          lang === 'ru' ? 'text-cyan-400 font-medium' : 'hover:text-slate-300'
        }`}
      >
        RU
      </button>
    </div>
  )
}

function Content() {
  const { t } = useLanguage()

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors shrink-0">
            ECU Protocol
          </a>
          <nav className="flex items-center gap-4 sm:gap-6 flex-wrap justify-end">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">
              {t.nav.about}
            </a>
            <a href="#protocol" className="text-slate-400 hover:text-white transition-colors text-sm">
              {t.nav.protocol}
            </a>
            <a href="#contracts" className="text-slate-400 hover:text-white transition-colors text-sm">
              {t.nav.contracts}
            </a>
            <a href="#community" className="text-slate-400 hover:text-white transition-colors text-sm">
              {t.nav.community}
            </a>
            <LangSwitcher />
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-24">
          {/* Hero */}
          <section className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="ECU" width={64} height={64} className="opacity-90" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-400 mb-1">{t.hero.subtitle}</p>
            <p className="text-sm text-cyan-500/90 font-medium mb-8">{t.hero.mainnet}</p>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.hero.text}
              <br />
              {t.hero.disclaimer}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`${TONVIEWER_BASE}/${JETTON_MASTER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.hero.jettonMaster}
              </a>
              <a
                href={`${TONVIEWER_BASE}/${UTILITY_CONTRACT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.hero.utilityContract}
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.hero.telegram}
              </a>
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-24">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700/50 hover:border-l-2 hover:border-l-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{t.about.title}</h2>
              <p className="text-slate-300 leading-relaxed">{t.about.text}</p>
            </div>
          </section>

          {/* Protocol */}
          <section id="protocol" className="scroll-mt-24">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700/50 hover:border-l-2 hover:border-l-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{t.protocol.title}</h2>
              <p className="text-slate-300 leading-relaxed">{t.protocol.text}</p>
            </div>
          </section>

          {/* Contracts */}
          <section id="contracts" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white mb-2">{t.contracts.title}</h2>
            <p className="text-slate-400 mb-8">{t.contracts.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-3">{t.contracts.jetton.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{t.contracts.jetton.text}</p>
                <a
                  href={`${TONVIEWER_BASE}/${JETTON_MASTER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded-lg transition-colors"
                >
                  {t.contracts.jetton.button}
                </a>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-3">{t.contracts.utility.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{t.contracts.utility.text}</p>
                <a
                  href={`${TONVIEWER_BASE}/${UTILITY_CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded-lg transition-colors"
                >
                  {t.contracts.utility.button}
                </a>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-3">{t.contracts.treasury.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{t.contracts.treasury.text}</p>
                <a
                  href={`${TONVIEWER_BASE}/${TREASURY_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded-lg transition-colors"
                >
                  {t.contracts.treasury.button}
                </a>
              </div>
            </div>
          </section>

          {/* Transparency */}
          <section className="scroll-mt-24">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700/50 hover:border-l-2 hover:border-l-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{t.transparency.title}</h2>
              <p className="text-slate-300 leading-relaxed">{t.transparency.text}</p>
            </div>
          </section>

          {/* Why TON */}
          <section className="scroll-mt-24">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700/50 hover:border-l-2 hover:border-l-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{t.whyTon.title}</h2>
              <p className="text-slate-300 leading-relaxed">{t.whyTon.text}</p>
            </div>
          </section>

          {/* Community */}
          <section id="community" className="scroll-mt-24">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 text-center hover:border-slate-700/50 hover:border-l-2 hover:border-l-cyan-500/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">{t.community.title}</h2>
              <p className="text-slate-300 mb-6">{t.community.text}</p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
              >
                {t.community.button}
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-800 pt-12 text-center">
            <p className="text-white font-medium">{t.footer.title}</p>
            <p className="text-slate-400 text-sm mt-1">{t.footer.mainnet}</p>
            <div className="flex flex-wrap gap-6 justify-center mt-6">
              <a
                href={`${TONVIEWER_BASE}/${JETTON_MASTER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Jetton Master
              </a>
              <a
                href={`${TONVIEWER_BASE}/${UTILITY_CONTRACT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Utility Contract
              </a>
              <a
                href={`${TONVIEWER_BASE}/${TREASURY_WALLET}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                ECU Treasury Wallet
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Telegram
              </a>
            </div>
          </footer>

          {/* Disclaimer */}
          <section className="bg-slate-900/30 border border-slate-800/30 rounded-xl p-6">
            <p className="text-slate-500 text-sm leading-relaxed">{t.disclaimer.text}</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  )
}
