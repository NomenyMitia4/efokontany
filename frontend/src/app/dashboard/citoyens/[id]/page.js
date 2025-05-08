'use client'

import { useParams } from 'next/navigation'
import DashboardLayout from '@/components/DashboardLayout'
import CitoyenProfil from '@/components/CitoyenProfil'
import { citoyens } from '@/data/citoyens'

const PageCitoyen = () => {
  const { id } = useParams()
  const citoyen = citoyens.find(c => String(c.id) === id)

  if (!citoyen) {
    return (
      <DashboardLayout>
        <p className="text-danger p-4">⚠️ Citoyen non trouvé pour l&apos;ID {id}</p>
      </DashboardLayout>
    )
  }

  return <CitoyenProfil citoyen={citoyen} />
}

export default PageCitoyen;