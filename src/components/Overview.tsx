import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangle,
  BarChart3,
  Users,
  FileText,
  Activity,
} from 'lucide-react'
import { getStableValue } from '../lib/random'
import { liveFeedMessages } from '../lib/data'

export default function Overview() {
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0)

  // Stable random values using deterministic seed
  const threatLevel = getStableValue('threat', 1, 5)
  const concernIndex = getStableValue('concern', 0, 100)
  const activeCommittees = getStableValue('committees', 12, 48)
  const documentsProduced = getStableValue('documents', 120, 900)

  const threatLevels = ['MINIMAL', 'LOW', 'MODERATE', 'ELEVATED', 'CRITICAL']
  const threatColors = [
    'text-ops-green',
    'text-blue-400',
    'text-ops-amber',
    'text-orange-500',
    'text-ops-red',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedIndex((prev) => (prev + 1) % liveFeedMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const statusTiles = [
    {
      icon: AlertTriangle,
      label: 'Threat Level',
      value: threatLevels[threatLevel - 1],
      color: threatColors[threatLevel - 1],
    },
    {
      icon: BarChart3,
      label: 'Concern Index™',
      value: concernIndex,
      color: concernIndex > 70 ? 'text-ops-red' : concernIndex > 40 ? 'text-ops-amber' : 'text-ops-green',
    },
    {
      icon: Users,
      label: 'Active Committees',
      value: activeCommittees,
      color: 'text-ops-blue',
    },
    {
      icon: FileText,
      label: 'Documents Produced',
      value: documentsProduced,
      color: 'text-gray-400',
    },
  ]

  return (
    <section id="overview" className="space-y-6">
      <div className="ops-panel ops-glow">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="text-ops-green" size={32} />
          <div>
            <h2 className="text-3xl font-mono font-bold text-ops-green">
              IS THE EU MONITORING THE SITUATION?
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              A public service dedicated to monitoring. Not resolving.
            </p>
          </div>
        </div>

        {/* Status tiles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {statusTiles.map((tile, index) => {
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-ops-dark border border-ops-border rounded-lg p-4 hover:border-ops-green transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon size={20} className="text-gray-500" />
                  <span className="status-led bg-ops-green animate-blink"></span>
                </div>
                <p className="text-xs text-gray-500 font-mono mb-1">
                  {tile.label}
                </p>
                <p className={`text-2xl font-mono font-bold ${tile.color}`}>
                  {tile.value}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Live feed ticker */}
        <div className="bg-ops-dark border border-ops-border rounded-lg p-4 overflow-hidden">
          <div className="flex items-center space-x-3 mb-2">
            <span className="status-led bg-ops-red animate-pulse"></span>
            <span className="text-xs font-mono text-gray-400">
              LIVE FEED - OPERATIONAL UPDATES
            </span>
          </div>
          <div className="h-12 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFeedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-gray-300 font-mono absolute inset-0 flex items-center"
              >
                {liveFeedMessages[currentFeedIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
