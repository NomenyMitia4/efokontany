'use client'

import { useParams } from 'next/navigation'
import CitoyenProfil from '@/components/CitoyenProfil'
import { citoyens } from '@/components/CitoyenTable' // ✅ On importe les données

const PageCitoyen = () => {
  const { id } = useParams()

  const citoyen = citoyens.find(c => String(c.id) === id)

  if (!citoyen) {
    return <div className="p-4 text-danger">⚠️ Citoyen non trouvé pour l'ID {id}</div>
  }

  return (
    <CitoyenProfil citoyen={citoyen} />
  )
}

export default PageCitoyen