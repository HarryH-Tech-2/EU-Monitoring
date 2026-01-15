import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Copy, Loader2, Shield } from 'lucide-react'
import { generateStatement } from '../lib/generator'
import type { StatementOptions } from '../lib/generator'

export default function StatementGenerator() {
  const [options, setOptions] = useState<StatementOptions>({
    topic: 'artificial intelligence',
    severity: 3,
    includeStakeholder: true,
    includeTimeline: false,
    includeJointStatement: false,
  })
  const [statement, setStatement] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const topics = [
    'artificial intelligence',
    'fisheries management',
    'migration policy',
    'cheese labeling standards',
    'banana trade regulations',
    'cybersecurity protocols',
    'inflation monitoring',
    'carbon emissions tracking',
    'transport infrastructure',
    'cross-border administrative alignment',
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 900))
    const newStatement = generateStatement(options)
    setStatement(newStatement)
    setIsGenerating(false)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(statement)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="generator" className="ops-panel">
      <div className="flex items-center space-x-3 mb-6">
        <FileText className="text-ops-green" size={28} />
        <div>
          <h2 className="text-2xl font-mono font-bold text-ops-green">
            STATEMENT GENERATOR
          </h2>
          <p className="text-gray-400 text-sm">
            Automated bureaucratic response synthesis
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-6">
          {/* Topic dropdown */}
          <div>
            <label className="block text-sm font-mono text-gray-400 mb-2">
              SITUATION TOPIC
            </label>
            <select
              value={options.topic}
              onChange={(e) => setOptions({ ...options, topic: e.target.value })}
              className="w-full bg-ops-dark border border-ops-border rounded px-4 py-2 text-gray-100 font-mono text-sm focus:outline-none focus:border-ops-green transition-colors"
              aria-label="Select situation topic"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Severity slider */}
          <div>
            <label className="block text-sm font-mono text-gray-400 mb-2">
              CONCERN SEVERITY: {options.severity}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={options.severity}
              onChange={(e) =>
                setOptions({ ...options, severity: parseInt(e.target.value) })
              }
              className="w-full accent-ops-green"
              aria-label="Adjust concern severity level"
            />
            <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
              <span>MILD</span>
              <span>MODERATE</span>
              <span>GRAVE</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={options.includeStakeholder}
                onChange={(e) =>
                  setOptions({ ...options, includeStakeholder: e.target.checked })
                }
                className="w-4 h-4 accent-ops-green"
                aria-label="Include stakeholder consultation paragraph"
              />
              <span className="text-sm font-mono text-gray-300 group-hover:text-ops-green transition-colors">
                Include stakeholder consultation paragraph
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={options.includeTimeline}
                onChange={(e) =>
                  setOptions({ ...options, includeTimeline: e.target.checked })
                }
                className="w-4 h-4 accent-ops-green"
                aria-label="Include implementation timeline paragraph"
              />
              <span className="text-sm font-mono text-gray-300 group-hover:text-ops-green transition-colors">
                Include implementation timeline paragraph
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={options.includeJointStatement}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    includeJointStatement: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-ops-green"
                aria-label="Include joint statement with partners"
              />
              <span className="text-sm font-mono text-gray-300 group-hover:text-ops-green transition-colors">
                Include joint statement with relevant partners
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex-1 bg-ops-green text-ops-dark px-6 py-3 rounded font-mono font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              aria-label="Generate statement"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>GENERATING...</span>
                </>
              ) : (
                <span>GENERATE STATEMENT</span>
              )}
            </button>

            {statement && (
              <button
                onClick={handleCopy}
                className="bg-ops-dark border border-ops-green text-ops-green px-4 py-3 rounded font-mono hover:bg-ops-green hover:text-ops-dark transition-all flex items-center space-x-2"
                aria-label="Copy statement to clipboard"
              >
                <Copy size={18} />
                <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Output */}
        <div>
          <div className="bg-ops-dark border border-ops-border rounded-lg p-6 min-h-[400px] relative">
            {statement ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Classified stamp */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-ops-green bg-opacity-10 border border-ops-green px-3 py-1 rounded">
                  <Shield size={14} className="text-ops-green" />
                  <span className="text-xs font-mono text-ops-green font-bold">
                    CLASSIFIED: PUBLIC RELEASE
                  </span>
                </div>

                <div className="text-sm text-gray-300 leading-relaxed space-y-4 mt-8">
                  {statement.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 text-sm font-mono">
                <p className="text-center">
                  Configure parameters and generate statement
                  <br />
                  to initiate monitoring response protocol
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
