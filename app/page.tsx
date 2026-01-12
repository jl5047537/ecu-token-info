'use client'

import { useState } from 'react'

const JETTON_MASTER = 'EQAlFh-_a1UbCPz119-FzTTLw0RQvaDTCBU4sCafh_n64SYo'
const UTILITY_CONTRACT = 'EQAohNdffFTjI2j4nYHsLIxp51cl23u37YS7IKwoT-md0WqZ'

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Block A — Hero */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Electronic Coin Unit (ECU)
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Utility settlement token on TON blockchain
          </p>
          <div className="space-y-3 mb-6">
            <p className="text-gray-600">
              ECU is an experimental utility token used for controlled on-chain workflows.
            </p>
            <p className="text-gray-600">
              The project is in an early operational phase with public development updates.
            </p>
            <p className="text-gray-600">
              Official references and on-chain links are provided below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://tonviewer.com/EQAlFh-_a1UbCPz119-FzTTLw0RQvaDTCBU4sCafh_n64SYo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Jetton Master (TON Viewer)
            </a>
            <a
              href="https://tonviewer.com/EQAohNdffFTjI2j4nYHsLIxp51cl23u37YS7IKwoT-md0WqZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Utility Contract (TON Viewer)
            </a>
            <a
              href="https://t.me/ecuton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Telegram Updates
            </a>
          </div>
        </section>

        {/* Block B — What is ECU */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is ECU
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>ECU is a jetton deployed on TON mainnet.</li>
            <li>ECU is used as a utility settlement layer inside application workflows.</li>
            <li>Usage is currently controlled and limited.</li>
            <li>The project is under active development.</li>
          </ul>
        </section>

        {/* Block C — Current on-chain utility */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Current on-chain utility
          </h2>
          <p className="text-gray-700 mb-6">
            ECU is currently used with a utility smart contract that supports controlled token flows such as deposit and redemption. This stage focuses on system stability and predictable behavior before broader usage. These flows are used to validate system integration and operational reliability in real on-chain conditions.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Jetton Master:</span>
              <code className="flex-1 px-3 py-1 bg-gray-100 rounded border border-gray-300 text-sm text-gray-800 font-mono">
                {JETTON_MASTER}
              </code>
              <button
                onClick={() => copyToClipboard(JETTON_MASTER, 'jetton')}
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              >
                {copied === 'jetton' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Utility Contract:</span>
              <code className="flex-1 px-3 py-1 bg-gray-100 rounded border border-gray-300 text-sm text-gray-800 font-mono">
                {UTILITY_CONTRACT}
              </code>
              <button
                onClick={() => copyToClipboard(UTILITY_CONTRACT, 'utility')}
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors"
              >
                {copied === 'utility' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </section>

        {/* Block D — Public development updates */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Public development updates
          </h2>
          <p className="text-gray-700 mb-4">
            Public progress, on-chain activity and status updates are published on Telegram.
          </p>
          <a
            href="https://t.me/ecuton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Open Telegram channel
          </a>
        </section>

        {/* Block E — Project status */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Project status
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>Status: Public development phase</li>
            <li>Network: TON mainnet</li>
            <li>Focus: stability, controlled usage, gradual rollout</li>
          </ul>
          <p className="text-gray-600 italic mt-4">
            No timelines. No investment claims.
          </p>
        </section>

        {/* Block F — Disclaimer */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-700">
            ECU is an experimental utility token under active development. This website is informational and does not constitute financial advice or an investment offer.
          </p>
        </section>
      </div>
    </main>
  )
}

