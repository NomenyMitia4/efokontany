'use client'

import DashboardLayout from '@/components/DashboardLayout'
import DashboardStats from '@/components/DashboardStats'
import DashboardChart from '@/components/DashboardChart'
import CitoyenTable from '@/components/CitoyenTable'

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h2 className="color-green mb-4">Dashboard Général</h2>

      {/* Statistiques clés */}
      <DashboardStats />

      {/* Graphique par statut */}
      <div className="mt-5">
        <h5 className="text-muted">Répartition des citoyens par statut</h5>
        <DashboardChart />
      </div>

      {/* Liste des personnes prioritaires */}
      <div className="mt-5">
        <h5 className="text-muted">Personnes classées par priorité</h5>
        <CitoyenTable />
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage