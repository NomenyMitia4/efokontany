'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { statut: 'Travailleur actif', count: 60 },
  { statut: 'Senior isolé', count: 25 },
  { statut: 'Mère seule', count: 20 },
  { statut: 'Personne handicapée', count: 12 },
]

const DashboardChart = () => {
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
