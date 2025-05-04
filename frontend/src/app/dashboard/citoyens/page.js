'use client'

import CitoyenTable from '@/components/CitoyenTable'
import DashboardLayout from '@/components/DashboardLayout'

const CitoyensPage = () => {
  return (
    <DashboardLayout>
      <h2 className="color-green mb-4">Liste des citoyens</h2>
      <CitoyenTable />
    </DashboardLayout>
  )
}

export default CitoyensPage