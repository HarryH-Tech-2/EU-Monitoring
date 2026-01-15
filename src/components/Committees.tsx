import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, Search, Filter } from 'lucide-react'
import { getStableValue } from '../lib/random'
import { committeeTemplates } from '../lib/data'

interface Committee {
  id: number
  name: string
  status: string
  cadence: string
  progress: number
  nextMeeting: string
}

export default function Committees() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Generate stable committee data
  const committees: Committee[] = useMemo(() => {
    const generated: Committee[] = []
    for (let i = 0; i < 20; i++) {
      const prefix =
        committeeTemplates.prefixes[
          getStableValue(`committee-prefix-${i}`, 0, committeeTemplates.prefixes.length - 1)
        ]
      const subject =
        committeeTemplates.subjects[
          getStableValue(`committee-subject-${i}`, 0, committeeTemplates.subjects.length - 1)
        ]
      const status =
        committeeTemplates.statuses[
          getStableValue(`committee-status-${i}`, 0, committeeTemplates.statuses.length - 1)
        ]
      const cadence =
        committeeTemplates.cadences[
          getStableValue(`committee-cadence-${i}`, 0, committeeTemplates.cadences.length - 1)
        ]
      const progress = getStableValue(`committee-progress-${i}`, 92, 99)

      // Generate fake next meeting date
      const daysAhead = getStableValue(`committee-days-${i}`, 2, 21)
      const nextMeeting = new Date()
      nextMeeting.setDate(nextMeeting.getDate() + daysAhead)
      const meetingStr = nextMeeting.toISOString().slice(0, 10)

      generated.push({
        id: i,
        name: `${prefix} ${subject}`,
        status,
        cadence,
        progress,
        nextMeeting: meetingStr,
      })
    }
    return generated
  }, [])

  // Filter committees
  const filteredCommittees = useMemo(() => {
    return committees.filter((committee) => {
      const matchesSearch = committee.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesStatus =
        statusFilter === 'all' || committee.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [committees, searchTerm, statusFilter])

  const statusColors: Record<string, string> = {
    'In consultation': 'border-ops-blue text-ops-blue',
    'Awaiting translation': 'border-ops-amber text-ops-amber',
    'Under review': 'border-ops-green text-ops-green',
    Deferred: 'border-gray-500 text-gray-400',
    'Pending approval': 'border-ops-amber text-ops-amber',
    'In drafting phase': 'border-ops-blue text-ops-blue',
  }

  return (
    <section id="committees" className="ops-panel">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="text-ops-green" size={28} />
        <div>
          <h2 className="text-2xl font-mono font-bold text-ops-green">
            COMMITTEES & WORKING GROUPS
          </h2>
          <p className="text-gray-400 text-sm">
            Active monitoring task forces and subcommittees
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search committees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-ops-dark border border-ops-border rounded pl-10 pr-4 py-2 text-gray-100 font-mono text-sm focus:outline-none focus:border-ops-green transition-colors"
            aria-label="Search committees"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <Filter
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-ops-dark border border-ops-border rounded pl-10 pr-4 py-2 text-gray-100 font-mono text-sm focus:outline-none focus:border-ops-green transition-colors"
            aria-label="Filter by status"
          >
            <option value="all">ALL STATUSES</option>
            {committeeTemplates.statuses.map((status) => (
              <option key={status} value={status}>
                {status.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs font-mono text-gray-500 mb-4">
        SHOWING {filteredCommittees.length} OF {committees.length} COMMITTEES
      </p>

      {/* Committee cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCommittees.map((committee, index) => (
          <motion.div
            key={committee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-ops-dark border border-ops-border rounded-lg p-4 hover:border-ops-green transition-colors"
          >
            {/* Committee name */}
            <h3 className="text-sm font-mono text-gray-100 mb-3 line-clamp-2 min-h-[2.5rem]">
              {committee.name}
            </h3>

            {/* Status badge */}
            <div
              className={`inline-block border ${
                statusColors[committee.status]
              } rounded px-2 py-1 mb-3`}
            >
              <span className="text-xs font-mono">{committee.status}</span>
            </div>

            {/* Info */}
            <div className="space-y-2 text-xs font-mono text-gray-400">
              <div className="flex justify-between">
                <span>Cadence:</span>
                <span className="text-gray-300">{committee.cadence}</span>
              </div>
              <div className="flex justify-between">
                <span>Next meeting:</span>
                <span className="text-gray-300">{committee.nextMeeting}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-mono text-gray-500">Progress</span>
                <span className="text-xs font-mono text-ops-green">
                  {committee.progress}%
                </span>
              </div>
              <div className="w-full bg-ops-panel rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${committee.progress}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="h-full bg-ops-green"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCommittees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 font-mono text-sm">
            No committees match the current filters
          </p>
        </div>
      )}
    </section>
  )
}
