import {
  Home,
  FileText,
  BarChart3,
  Users,
  Info,
  Coffee,
  Menu,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'generator', label: 'Statement Gen', icon: FileText },
  { id: 'dashboard', label: 'Concern Index', icon: BarChart3 },
  { id: 'committees', label: 'Committees', icon: Users },
  { id: 'about', label: 'About', icon: Info },
  { id: 'support', label: 'Support', icon: Coffee },
]

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-ops-green text-ops-dark p-3 rounded-full shadow-lg"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 bottom-0 w-64 bg-ops-panel border-r border-ops-border z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-ops-dark hover:text-ops-green transition-colors border border-transparent hover:border-ops-green group"
              >
                <Icon
                  size={20}
                  className="text-gray-500 group-hover:text-ops-green transition-colors"
                />
                <span className="font-mono text-sm">{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Radar sweep visual */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-ops-green rounded-full opacity-20"></div>
            <div className="absolute inset-2 border border-ops-green rounded-full opacity-30"></div>
            <div className="absolute inset-4 border border-ops-green rounded-full opacity-40"></div>
            <div
              className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-ops-green origin-left animate-scan"
              style={{ transformOrigin: '0% 50%' }}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-ops-green rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <p className="text-xs font-mono text-center text-gray-500 mt-2">
            RADAR SWEEP
          </p>
        </div>
      </aside>
    </>
  )
}
