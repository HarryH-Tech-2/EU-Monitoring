import { useState, useEffect } from 'react'
import { Activity, Coffee } from 'lucide-react'

export default function TopBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUTC = (date: Date) => {
    return date.toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ops-panel border-b border-ops-border h-16">
      <div className="h-full px-4 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Site name */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Activity className="text-ops-green animate-pulse-slow" size={24} />
          <h1 className="hidden sm:block text-lg sm:text-xl font-mono font-bold text-ops-green tracking-tight">
            IS THE EU MONITORING THE SITUATION?
          </h1>
          <h1 className="block sm:hidden text-sm font-mono font-bold text-ops-green tracking-tight">
            EU MONITORING?
          </h1>
        </div>

        {/* Center: Operational status */}
        <div className="hidden lg:flex items-center space-x-2 bg-ops-dark px-4 py-2 rounded border border-ops-green">
          <span className="status-led bg-ops-green animate-pulse"></span>
          <span className="text-sm font-mono text-ops-green">
            OPERATIONAL STATUS: ACTIVE
          </span>
        </div>

        {/* Right: Buy Me a Coffee + UTC time */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://buymeacoffee.com/harryhh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ops-green text-ops-dark px-3 sm:px-4 py-2 rounded font-mono font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all flex items-center gap-2 whitespace-nowrap"
            aria-label="Support via Buy Me a Coffee"
          >
            <Coffee size={16} />
            <span className="hidden sm:inline">SUPPORT</span>
          </a>

          <div className="hidden md:block text-xs sm:text-sm font-mono text-gray-400 bg-ops-dark px-3 py-1 rounded border border-ops-border whitespace-nowrap">
            {formatUTC(time)}
          </div>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ops-green to-transparent opacity-30 animate-pulse"></div>
    </header>
  )
}
