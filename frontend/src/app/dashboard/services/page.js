'use client'

import { services } from '@/data/services'
import Link from 'next/link'
import DashboardLayout from '@/components/DashboardLayout'

const ListeServices = () => {
  return (
    <DashboardLayout>
    <div className="container py-4">
      <h2 className="color-green mb-4">Liste des services disponibles</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className="card h-100 shadow">
              <img src={`/photo/${service.photo}`} className="card-img-top" alt={service.nom_service} />
              <div className="card-body">
                <h5 className="card-title">{service.nom_service}</h5>
                <p className="card-text">Quantité restante : {service.quantite}</p>
                <p style={{fontSize:"13px", color:"grey"}}>Unité : {service.unite}</p>
                <Link href={`/dashboard/services/${service.id}`} className="btn btn-success" style={{background:"#24c86b"}}>Voir détails</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </DashboardLayout>
  )
}

export default ListeServices