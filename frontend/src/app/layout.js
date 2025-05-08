import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'Efokontany',
  description: 'Application d’identité numérique locale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/photo/favicon.png" sizes="any" />
        <title>Efokontany</title>
      </head>
      <body>{children}</body>
    </html>
  )
}