"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className="d-flex flex-column p-3 bg-light border-end"
      style={{ height: "auto", width: "250px" }}
    >
      <h4 className="mb-5 fw-bold logo">Efokontany</h4>
      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <Link
            href="/dashboard"
            className={`nav-link ${
              pathname === "/dashboard" ? "active custom-active" : ""
            }`}
          >
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/dashboard/services"
            className={`nav-link ${
              pathname.startsWith("/dashboard/services")
                ? "active custom-active"
                : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/dashboard/scan"
            className={`nav-link ${
              pathname === "/dashboard/scan" ? "active custom-active" : ""
            }`}
          >
            Scan QR Code
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/dashboard/citoyens"
            className={`nav-link ${
              pathname === "/dashboard/citoyens" ? "active custom-active" : ""
            }`}
          >
            Citoyens
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/dashboard/citoyens/ajouter"
            className={`nav-link ${
              pathname === "/dashboard/citoyens/ajouter"
                ? "active custom-active"
                : ""
            }`}
          >
            Ajouter citoyen
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/" className="nav-link text-danger">
            Déconnexion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
