import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-4 bg-white" style={{ minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout