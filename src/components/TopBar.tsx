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

        {/* Right: X + Buy Me a Coffee + UTC time */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://x.com/HarryHH1993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2 rounded border border-ops-border bg-ops-dark flex items-center"
            aria-label="Follow on X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2H21.5l-7.5 8.574L22.5 22h-6.78l-5.31-6.95L4.32 22H1.06l8.03-9.18L1.5 2h6.94l4.8 6.34L18.244 2Zm-1.19 18h1.87L7.04 4H5.05l12.004 16Z" />
            </svg>
          </a>

          <a
            href="https://buymeacoffee.com/harryhh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ops-yellow text-ops-dark px-3 sm:px-4 py-2 rounded font-mono font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all flex items-center gap-2 whitespace-nowrap"
            aria-label="Buy me a coffee"
          >
            <Coffee size={16} />
            <span className="hidden sm:inline">KEEP THE MONITORS ONLINE</span>
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
