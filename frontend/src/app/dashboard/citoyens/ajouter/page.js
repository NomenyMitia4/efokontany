'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { useState } from 'react'
//import { useRouter } from 'next/navigation'
import QRCode from 'qrcode'

const AjouterCitoyen = () => {
  //const router = useRouter()
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [form, setForm] = useState({
    nom: '', prenom: '', email: '', contact: '', nbEnfants: '',
    handicap: false, revenu: '', statut: '', village: '', dateNaissance: '', profession: '', cin: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const citoyen = {
      id: Math.floor(Math.random() * 100000),
      ...form,
      dateAjout: new Date().toISOString(),
      dateMaj: new Date().toISOString()
    }

    const profileUrl = `${window.location.origin}/dashboard/citoyens/${citoyen.id}`
    const qr = await QRCode.toDataURL(profileUrl)
    setQrCodeUrl(qr)
    console.log('Citoyen ajouté :', citoyen)
  }

  return (
    <DashboardLayout>
      <div className="container container-ajouter">
        <h2 className="color-green mb-4">Ajouter un citoyen</h2>
        <form className="bg-white p-4 rounded" onSubmit={handleSubmit} style={{ minWidth: 700, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
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
              <label className="form-label">Date de naissance</label>
              <input type="date" className="form-control" name="dateNaissance" value={form.dateNaissance} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Numéro CIN</label>
              <input className="form-control" name="cin" value={form.cin} onChange={handleChange} required />
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
              <label className="form-label">Rue</label>
              <input className="form-control" name="village" value={form.village} onChange={handleChange} required />
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
              <label className="form-label">Statut civil</label>
              <select name="statut" className="form-select" value={form.statut} onChange={handleChange} required>
                <option value="Célibataire">Célibataire</option>
                <option value="Marié">Marié</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Nombre d&apos;enfants</label>
              <input type="number" className="form-control" name="nbEnfants" value={form.nbEnfants} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Profession</label>
              <input className="form-control" name="profession" value={form.profession} onChange={handleChange}/>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Revenu par mois (en Ariary)</label>
              <input className="form-control" name="revenu" value={form.revenu} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="button-cta w-100 mt-3">
            Enregistrer et Générer le QR Code
          </button>
        </form>

        {qrCodeUrl && (
          <div className="text-center mt-4">
            <h5 className="text-success">QR Code du citoyen</h5>
            <img src={qrCodeUrl} alt="QR Code" style={{ maxWidth: '200px' }} />
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default AjouterCitoyen