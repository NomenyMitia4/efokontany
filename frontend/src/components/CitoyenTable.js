'use client'

import Link from 'next/link'
import { useState } from 'react'

export const citoyens = [
  {
    id: 1,
    nom: 'Rasoanaivo',
    prenom: 'Lala',
    email: 'lala.rasoanaivo@example.com',
    contact: '0321234567',
    adresse: 'Lot II A 123',
    dateNaissance: '1995-01-22',
    nbEnfants: 3,
    handicap: false,
    job: 'Ingénieur',
    revenu: 120000,
    statut: 'Marié',
    priorité: 1,
    dateAjout: '2025-05-04T12:00:00',
    dateMaj: '2025-05-04T12:00:00'
  },
  {
    id: 2,
    nom: 'Rakoto',
    prenom: 'Jean',
    email: 'jean.rakoto@example.com',
    contact: '0349876543',
    adresse: 'Lot II A 123',
    dateNaissance: '1990-07-09',
    nbEnfants: 2,
    handicap: true,
    job: 'Agriculteur',
    revenu: 60000,
    statut: 'Célibataire',
    priorité: 3,
    dateAjout: '2025-05-04T12:00:00',
    dateMaj: '2025-05-04T12:00:00'
  },
  {
    id: 3,
    nom: 'Ranaivo',
    prenom: 'Andry',
    email: '',
    contact: '0337654321',
    adresse: 'Lot II A 123',
    dateNaissance: '1985-03-15',
    nbEnfants: 1,
    handicap: false,
    job: 'Vendeur',
    revenu: 100000,
    statut: 'Marié',
    priorité: 2,
    dateAjout: '2025-05-04T12:00:00',
    dateMaj: '2025-05-04T12:00:00'
  },
  {
    id: 4,
    nom: 'Koto',
    prenom: 'Fetra',
    email: '',
    contact: '0323456789',
    adresse: 'Lot II A 123',
    dateNaissance: '1972-11-02',
    nbEnfants: 0,
    handicap: true,
    job: 'Dokera',
    revenu: 25000,
    statut: 'Célibataire',
    priorité: 5,
    dateAjout: '2025-05-04T12:00:00',
    dateMaj: '2025-05-04T12:00:00'
  }
]

const CitoyenTable = () => {
  const [search, setSearch] = useState('')
  const [priorite, setPriorite] = useState('')

  const filtered = citoyens.filter((c) => {
    const nomMatch = `${c.nom} ${c.prenom}`.toLowerCase().includes(search.toLowerCase())
    const prioriteMatch = priorite ? c.priorité.toString() === priorite : true
    return nomMatch && prioriteMatch
  })

  const sorted = [...filtered].sort((a, b) => b.priorité - a.priorité)

  return (
    <>
      {/* Champs de recherche */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Rechercher par nom"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={priorite}
            onChange={(e) => setPriorite(e.target.value)}
          >
            <option value="">Toutes les priorités</option>
            <option value="1">Priorité 1</option>
            <option value="2">Priorité 2</option>
            <option value="3">Priorité 3</option>
            <option value="4">Priorité 4</option>
            <option value="5">Priorité 5</option>
          </select>
        </div>
      </div>

      {/* Tableau des citoyens */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Contact</th>
              <th>Priorité</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.id}>
                <td>
                  <Link
                    href={`/dashboard/citoyens/${c.id}`}
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    {c.nom} {c.prenom}
                  </Link>
                </td>
                <td>{c.contact}</td>
                <td>{c.priorité}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sorted.length === 0 && (
          <p className="text-muted mt-3">Aucun citoyen correspondant trouvé.</p>
        )}
      </div>
    </>
  )
}

export default CitoyenTable