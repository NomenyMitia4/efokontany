'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AjouterCitoyen = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    contact: '',
    nbEnfants: '',
    handicap: false,
    revenu: '',
    statut: '',
    priorite: '',
    village: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Citoyen ajouté :', form)
    router.push('/dashboard/citoyens')
  }

  return (
    <DashboardLayout>
      <div className="container container-ajouter">
        <h2 className="color-green mb-4">Ajouter un citoyen</h2>
        <form className="bg-white p-4 rounded" onSubmit={handleSubmit} style={{ minWidth: 700, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Nom</label>
              <input className="form-control" name="nom" value={form.nom} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Prénom</label>
              <input className="form-control" name="prenom" value={form.prenom} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Contact</label>
              <input className="form-control" name="contact" value={form.contact} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Nombre d'enfants</label>
              <input type="number" className="form-control" name="nbEnfants" value={form.nbEnfants} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6 d-flex align-items-end">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" name="handicap" checked={form.handicap} onChange={handleChange} />
                <label className="form-check-label">Handicap</label>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="mb-3 col-md-6">
              <label className="form-label">Revenu (Ar)</label>
              <input className="form-control" name="revenu" value={form.revenu} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Statut civil</label>
              <select name="statut" className="form-select" value={form.statut} onChange={handleChange} required>
                <option value="Célibataire">Célibataire</option>
                <option value="Marié">Marié</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Adresse</label>
              <input className="form-control" name="village" value={form.village} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Priorité</label>
              <input
                className="form-control"
                name="priorite"
                type="number"
                min="1"
                max="5"
                value={form.priorite}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="button-cta w-100">
            Enregistrer
          </button>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default AjouterCitoyen
