import { motion } from 'framer-motion'
import { BarChart3, Activity, TrendingUp, Clock } from 'lucide-react'
import { getStableValue } from '../lib/random'
import { directorates } from '../lib/data'

export default function ConcernDashboard() {
  const concernIndex = getStableValue('concern-dashboard', 0, 100)
  const lastUpdated = getStableValue('last-updated', 5, 47)

  const getIntensity = (value: number) => {
    if (value < 25) return { label: 'LOW', color: 'text-ops-green' }
    if (value < 50) return { label: 'ELEVATED', color: 'text-ops-amber' }
    if (value < 75) return { label: 'HIGH', color: 'text-orange-500' }
    return { label: 'MAXIMUM', color: 'text-ops-red' }
  }

  const intensity = getIntensity(concernIndex)

  // Generate stable directorate data
  const directorateData = directorates.map((dir) => ({
    name: dir,
    value: getStableValue(`dir-${dir}`, 20, 95),
  }))

  // Generate stable sparkline data
  const sparklineData = Array.from({ length: 12 }, (_, i) =>
    getStableValue(`spark-${i}`, 30, 80)
  )

  const badges = [
    { icon: '✅', label: 'Monitoring', color: 'border-ops-green text-ops-green' },
    {
      icon: '🔁',
      label: 'Monitoring intensifies',
      color: 'border-ops-amber text-ops-amber',
    },
    { icon: '📌', label: 'Pending review', color: 'border-ops-blue text-ops-blue' },
    {
      icon: '📄',
      label: 'Drafting communiqué',
      color: 'border-gray-500 text-gray-400',
    },
  ]

  return (
    <section id="dashboard" className="ops-panel">
      <div className="flex items-center space-x-3 mb-6">
        <BarChart3 className="text-ops-green" size={28} />
        <div>
          <h2 className="text-2xl font-mono font-bold text-ops-green">
            CONCERN INDEX DASHBOARD
          </h2>
          <p className="text-gray-400 text-sm">Real-time monitoring metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Concern Index */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-ops-dark border border-ops-border rounded-lg p-6 text-center"
        >
          <Activity className="mx-auto mb-3 text-gray-500" size={24} />
          <p className="text-xs font-mono text-gray-500 mb-2">CONCERN INDEX™</p>
          <p className="text-5xl font-mono font-bold text-ops-green mb-2">
            {concernIndex}
          </p>
          <div className="w-full bg-ops-panel rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${concernIndex}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-ops-green"
            />
          </div>
        </motion.div>

        {/* Monitoring Intensity */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-ops-dark border border-ops-border rounded-lg p-6 text-center"
        >
          <TrendingUp className="mx-auto mb-3 text-gray-500" size={24} />
          <p className="text-xs font-mono text-gray-500 mb-2">
            MONITORING INTENSITY
          </p>
          <p className={`text-4xl font-mono font-bold ${intensity.color} mb-2`}>
            {intensity.label}
          </p>
          <span className={`status-led ${intensity.color.replace('text-', 'bg-')} animate-pulse`}></span>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-ops-dark border border-ops-border rounded-lg p-6 text-center"
        >
          <Clock className="mx-auto mb-3 text-gray-500" size={24} />
          <p className="text-xs font-mono text-gray-500 mb-2">LAST UPDATED</p>
          <p className="text-3xl font-mono font-bold text-gray-300 mb-2">
            {lastUpdated} <span className="text-xl">min</span>
          </p>
          <p className="text-xs text-gray-500 font-mono">ago</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Concern by Directorate */}
        <div className="bg-ops-dark border border-ops-border rounded-lg p-6">
          <h3 className="text-sm font-mono text-gray-400 mb-4">
            CONCERN BY DIRECTORATE
          </h3>
          <div className="space-y-3">
            {directorateData.map((dir, index) => (
              <motion.div
                key={dir.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-gray-400">
                    {dir.name}
                  </span>
                  <span className="text-xs font-mono text-ops-green">
                    {dir.value}%
                  </span>
                </div>
                <div className="w-full bg-ops-panel rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${dir.value}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-ops-green"
                    style={{
                      opacity: dir.value / 100,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Situation Volatility Sparkline */}
        <div className="bg-ops-dark border border-ops-border rounded-lg p-6">
          <h3 className="text-sm font-mono text-gray-400 mb-4">
            SITUATION VOLATILITY
          </h3>
          <div className="h-40 flex items-end space-x-1">
            {sparklineData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-1 bg-ops-green rounded-t"
                style={{ opacity: 0.5 + value / 200 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
            <span>12H AGO</span>
            <span>NOW</span>
          </div>
        </div>
      </div>

      {/* Status badges */}
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className={`border ${badge.color} rounded-lg px-4 py-2 flex items-center space-x-2`}
          >
            <span>{badge.icon}</span>
            <span className="text-xs font-mono">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
