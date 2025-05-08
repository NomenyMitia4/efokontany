'use client'

import { citoyens } from '@/data/citoyens'

const DashboardStats = () => {
  const totalCitoyens = citoyens.length
  const avecHandicap = citoyens.filter(c => c.handicap).length

  const totalPrioritaires = citoyens.filter(c => c.priorité > 4).length

  const pourcentHandicap = ((avecHandicap / totalCitoyens) * 100).toFixed(1)
  const pourcentPrioritaires = ((totalPrioritaires / totalCitoyens) * 100).toFixed(1)

  return (
    <div className="row text-center">
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>Total citoyens</h6>
          <h3 className="color-green">{totalCitoyens}</h3>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>Total prioritaires</h6>
          <h3 className="text-danger">{totalPrioritaires}</h3>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="border rounded p-3 bg-light" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
          <h6>% avec handicap</h6>
          <h3 className="text-primary">{pourcentHandicap}%</h3>
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