'use client'

import { useEffect, useState } from 'react'

const DashboardStats = () => {
  const [citizen, setCitizen] = useState(0)
  const [handicap, setHandicap] = useState(0)
  const [prioritizedCitizen, setPrioritizedCitizen] = useState(0)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/dashboard/', {
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
        setCitizen(data.registered_citizen)
        setHandicap(Number(data.pourcentage_handicap.toFixed(1)))
        setPrioritizedCitizen(data.prioritized_citizen)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    getData()
  }, [])

  // Pourcentages dynamiques depuis l'API
  const pourcentPrioritaires = citizen > 0
    ? ((prioritizedCitizen / citizen) * 100).toFixed(1)
    : '0.0'

  return (
    <div className="row text-center">
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>Total citoyens</h6>
          <h3 className="color-green">{citizen}</h3>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>Total prioritaires</h6>
          <h3 className="text-danger">{prioritizedCitizen}</h3>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>% avec handicap</h6>
          <h3 className="text-primary">{handicap}%</h3>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>% prioritaires</h6>
          <h3 className="text-warning">{pourcentPrioritaires}%</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardStats