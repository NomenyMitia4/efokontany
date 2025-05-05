'use client'

import DashboardLayout from '@/components/DashboardLayout'

const calculerAge = (dateNaissance) => {
  const naissance = new Date(dateNaissance)
  const aujourdHui = new Date()
  let age = aujourdHui.getFullYear() - naissance.getFullYear()
  const mois = aujourdHui.getMonth() - naissance.getMonth()

  if (mois < 0 || (mois === 0 && aujourdHui.getDate() < naissance.getDate())) {
    age--
  }

  return age
}

const CitoyenProfil = ({ citoyen }) => {
  return (
    <DashboardLayout>
      <div className="border p-4 rounded shadow bg-white">
        <h3 className="color-green mb-3">Profil de {citoyen.nom} {citoyen.prenom}</h3>
        <p><strong>Email :</strong> {citoyen.email || 'Non fourni'}</p>
        <p><strong>Contact :</strong> {citoyen.contact}</p>
        <p><strong>Date de naissance :</strong> {citoyen.dateNaissance}</p>
        <p><strong>Âge :</strong> {calculerAge(citoyen.dateNaissance)} ans</p>
        <p><strong>Nombre d&apos;enfants :</strong> {citoyen.nbEnfants}</p>
        <p><strong>Handicap :</strong> {citoyen.handicap ? 'Oui' : 'Non'}</p>
        <p><strong>Profession :</strong> {citoyen.job}</p>
        <p><strong>Revenu :</strong> {citoyen.revenu.toLocaleString()} Ar</p>
        <p><strong>Statut civil :</strong> {citoyen.statut}</p>
        <p><strong>Priorité :</strong> {citoyen.priorité}</p>
        <p><strong>Date d&apos;ajout :</strong> {new Date(citoyen.dateAjout).toLocaleString()}</p>
        <p><strong>Dernière mise à jour :</strong> {new Date(citoyen.dateMaj).toLocaleString()}</p>
      </div>
    </DashboardLayout>
  )
}

export default CitoyenProfil;