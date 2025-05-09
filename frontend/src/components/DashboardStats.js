'use client'

import { citoyens } from '@/data/citoyens'
import { useState } from 'react'

const DashboardStats = () => {
  const [citizen, setCitizen] = useState()
  const [handicap, setHandicap] = useState()
  const [prioritizedCitizen, setPrioritzedCitizen] = useState()

  const getData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/dashboard/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setCitizen(data.registered_citizen)
      setHandicap(data.pourcentage_handicap.toFixed(1))
      setPrioritzedCitizen(data.prioritized_citizen)
      
    } catch (err) {
      console.error('Error fetching data:', err);
      // You might want to handle the error in your UI
      throw err; // Re-throw if you want calling code to handle it
    }
  }

  const data = getData()

  const totalCitoyens = citoyens.length
  const avecHandicap = citoyens.filter(c => c.handicap).length

  const totalPrioritaires = citoyens.filter(c => c.priorité > 4).length

  const pourcentHandicap = ((avecHandicap / totalCitoyens) * 100).toFixed(1)
  const pourcentPrioritaires = ((prioritizedCitizen / citizen) * 100).toFixed(1)

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