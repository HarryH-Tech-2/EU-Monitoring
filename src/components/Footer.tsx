export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ops-border bg-ops-panel py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-400 font-mono">
            Co-funded by monitoring. Implemented by monitoring. Audited by monitoring.
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
            <span>OPERATIONAL SINCE 2024</span>
            <span>•</span>
            <span>MONITORING STATUS: PERPETUAL</span>
            <span>•</span>
            <a
              href="https://buymeacoffee.com/harryhh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ops-green hover:underline"
            >
              Support Operations
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
