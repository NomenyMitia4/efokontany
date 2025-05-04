'use client'

import Link from 'next/link'

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
      revenu: 25000,
      statut: 'Célibataire',
      priorité: 5,
      dateAjout: '2025-05-04T12:00:00',
      dateMaj: '2025-05-04T12:00:00'
    }
  ]

const CitoyenTable = () => {
  const sorted = [...citoyens].sort((a, b) => b.priorité - a.priorité)

  return (
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
                  {c.nom}{" "}{c.prenom}
                </Link>
              </td>
              <td>{c.contact}</td>
              <td>{c.priorité}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CitoyenTable