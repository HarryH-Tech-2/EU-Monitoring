import { Coffee, DollarSign, TrendingUp } from 'lucide-react'
import { getStableValue } from '../lib/random'

export default function Support() {
  const budgetAllocated = getStableValue('budget-allocated', 500, 2000)
  const budgetSpent = getStableValue('budget-spent', 450, 1950)
  const budgetRemaining = Math.max(0, budgetAllocated - budgetSpent)

  return (
    <section id="support" className="ops-panel">
      <div className="flex items-center space-x-3 mb-6">
        <Coffee className="text-ops-green" size={28} />
        <div>
          <h2 className="text-2xl font-mono font-bold text-ops-green">
            OPERATIONAL FUNDING
          </h2>
          <p className="text-gray-400 text-sm">
            Support continued monitoring operations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funding appeal */}
        <div className="space-y-6">
          <div className="bg-ops-dark border border-ops-border rounded-lg p-6">
            <h3 className="text-sm font-mono font-bold text-ops-green mb-3">
              FUNDING PRIORITIES
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-ops-green mt-1">▸</span>
                <p>Maintenance of continuous monitoring infrastructure</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-ops-green mt-1">▸</span>
                <p>Development of additional oversight frameworks</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-ops-green mt-1">▸</span>
                <p>Procurement of enhanced monitoring equipment</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-ops-green mt-1">▸</span>
                <p>Coffee for the monitoring personnel</p>
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="bg-ops-dark border border-ops-green rounded-lg p-6 text-center">
            <Coffee className="mx-auto mb-4 text-ops-green" size={48} />
            <h3 className="text-lg font-mono font-bold text-ops-green mb-2">
              SUPPORT THE MISSION
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Your contribution enables continuous situation monitoring. Every donation
              helps us maintain operational readiness and monitoring capacity.
            </p>
            <a
              href="https://buymeacoffee.com/harryhh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ops-green text-ops-dark px-8 py-3 rounded-lg font-mono font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              BUY ME A COFFEE
            </a>
            <p className="text-xs text-gray-500 font-mono mt-4">
              External funding portal • Secure transaction protocol
            </p>
          </div>
        </div>

        {/* Budget dashboard */}
        <div className="space-y-6">
          {/* Fake budget metrics */}
          <div className="bg-ops-dark border border-ops-border rounded-lg p-6">
            <h3 className="text-sm font-mono font-bold text-ops-green mb-4">
              CURRENT FISCAL PERIOD
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-gray-500" />
                    <span className="text-xs font-mono text-gray-400">
                      Budget Allocated
                    </span>
                  </div>
                  <span className="text-sm font-mono text-ops-green">
                    €{budgetAllocated}K
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-gray-500" />
                    <span className="text-xs font-mono text-gray-400">
                      Budget Spent
                    </span>
                  </div>
                  <span className="text-sm font-mono text-ops-amber">
                    €{budgetSpent}K
                  </span>
                </div>
                <div className="w-full bg-ops-panel rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-ops-amber"
                    style={{ width: `${(budgetSpent / budgetAllocated) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-400">Remaining</span>
                  <span className="text-sm font-mono text-gray-300">
                    €{budgetRemaining}K
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Expenditure breakdown */}
          <div className="bg-ops-dark border border-ops-border rounded-lg p-6">
            <h3 className="text-sm font-mono font-bold text-ops-green mb-4">
              EXPENDITURE BREAKDOWN
            </h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-gray-400">Monitoring Operations</span>
                <span className="text-gray-300">42%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Committee Coordination</span>
                <span className="text-gray-300">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Documentation Services</span>
                <span className="text-gray-300">18%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stakeholder Consultations</span>
                <span className="text-gray-300">9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Miscellaneous Oversight</span>
                <span className="text-gray-300">3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
