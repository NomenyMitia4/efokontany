"use client";

import { useParams } from "next/navigation";
import { services } from "@/data/services";
import { citoyens } from "@/data/citoyens";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

const PageService = () => {
  const { id } = useParams();
  const [service, setService] = useState(
    services.find((s) => s.id === Number(id))
  );
  const [beneficiaires, setBeneficiaires] = useState(citoyens);

  const offrirService = (citoyenId) => {
    if (service.quantite < service.unite)
      return alert("Quantité insuffisante !");

    // Réduire la quantité
    const newQuantite = service.quantite - service.unite;
    setService({ ...service, quantite: newQuantite });

    // Supprimer le citoyen de la liste
    setBeneficiaires((prev) => prev.filter((c) => c.id !== citoyenId));

    // Mettre à jour la priorité et date de mise à jour
    const index = citoyens.findIndex((c) => c.id === citoyenId);
    if (index !== -1) {
      citoyens[index].priorité += 1;
      citoyens[index].dateMaj = new Date().toISOString();
    }
  };

  return (
    <DashboardLayout>
      <div className="container py-4">
        <h2 className="color-green mb-4">
          Distribution : {service.nom_service}
        </h2>
        <p>
          Quantité restante : <strong>{service.quantite}</strong>
        </p>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaires.map((c) => (
              <tr key={c.id}>
                <td>
                  {c.nom} {c.prenom}
                </td>
                <td>{c.contact}</td>
                <td>
                  {service.quantite >= service.unite && (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => offrirService(c.id)}
                    >
                      Offrir
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {beneficiaires.length === 0 && (
          <p className="text-muted">Tous les citoyens ont reçu ce service.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PageService;
