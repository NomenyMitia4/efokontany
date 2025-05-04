'use client'

import { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import DashboardLayout from '@/components/DashboardLayout'

const ScanPage = () => {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 })

    scanner.render(
      (decodedText) => {
        setResult(decodedText)
        scanner.clear()
      },
      (error) => {
        console.warn('Erreur scan', error)
      }
    )

    return () => {
      scanner.clear().catch(() => {})
    }
  }, [])

  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-success mb-4">Scanner un QR Code</h2>
        {result ? (
          <div className="alert alert-success">
            ✅ Résultat : <strong>{result}</strong>
          </div>
        ) : (
          <div id="reader" style={{ width: '100%' }} />
        )}
      </div>
    </DashboardLayout>
  )
}

export default ScanPage