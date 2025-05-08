'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { citoyens } from '@/data/citoyens'

const DashboardChart = () => {
  // Regrouper les citoyens par statut
  const stats = citoyens.reduce((acc, citoyen) => {
    const statut = citoyen.statut || 'Inconnu'
    acc[statut] = (acc[statut] || 0) + 1
    return acc
  }, {})

  const data = Object.entries(stats)
    .map(([statut, count]) => ({ statut, count }))
    .sort((a, b) => b.count - a.count)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="statut" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#24c86b" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DashboardChart