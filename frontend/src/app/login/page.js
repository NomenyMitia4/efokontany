'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin@fokontany.com' && password === '1234') {
      router.push('/dashboard')
    } else {
      setError('Email ou mot de passe incorrect')
    }
  }

  return (
    <div className="container-fluid px-0">
      <div className="row vh-100">
        {/* ✅ Colonne gauche avec image */}
        <div className="col-md-8 d-none d-md-block p-0">
          <Image
            src="/photo/image-4.jpg"
            alt="Illustration"
            width={1000}
            height={1000}
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* ✅ Colonne droite avec formulaire */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center bg-white">
          <div className="w-100" style={{ maxWidth: 420 }}>
            {/* Logo intégré dans le formulaire */}
            <div className="text-center mb-4">
              <span className="logo-login">
                Efokontany
              </span>
              <p className="text-muted mt-3">Connexion</p>
            </div>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <form onSubmit={handleSubmit} className="px-3">
              <div className="mb-3">
                <label className="form-label">Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="button-cta w-100"
              >
                Se connecter
              </button>

              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none" style={{ color: '#24c86b' }}>
                  Mot de passe oublié ?
                </a>
              </div>
            </form>

            <div className="text-center mt-4 text-muted" style={{ fontSize: '0.9rem' }}>
              © {new Date().getFullYear()} Efokontany · Tous droits réservés
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage