'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { citoyens } from '@/data/citoyens'

const CitoyenTable = () => {
  const [search, setSearch] = useState('')
  const [priorite, setPriorite] = useState('')

  useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/citizen/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          })
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
  
          const data = await response.json()
          console.log(data);
        } catch (err) {
          console.error('Error fetching data:', err)
        }
      }
  
      getData()
    }, [])

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