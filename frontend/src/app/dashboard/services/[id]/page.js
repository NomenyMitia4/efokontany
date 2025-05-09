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
  const [filtrePriorite, setFiltrePriorite] = useState("");

  const offrirService = (citoyenId) => {
    if (service.quantite < service.unite) return;

    const newQuantite = service.quantite - service.unite;
    setService({ ...service, quantite: newQuantite });

    setBeneficiaires((prev) => prev.filter((c) => c.id !== citoyenId));

    const index = citoyens.findIndex((c) => c.id === citoyenId);
    if (index !== -1) {
      citoyens[index].priorité = Math.max(1, citoyens[index].priorité - 1);
      citoyens[index].dateMaj = new Date().toISOString();
    }
  };

  const filtered = [...beneficiaires]
    .filter((c) =>
      filtrePriorite ? c.priorité.toString() === filtrePriorite : true
    )
    .sort((a, b) => b.priorité - a.priorité);

  return (
    <DashboardLayout>
      <div className="container py-4">
        <h2 className="color-green mb-4">
          Distribution : {service.nom_service}
        </h2>
        <p>
          Quantité restante : <strong>{service.quantite}</strong>
        </p>

        <div className="mb-3 row">
          <div className="col-md-4">
            <select
              className="form-select"
              value={filtrePriorite}
              onChange={(e) => setFiltrePriorite(e.target.value)}
            >
              <option value="">Toutes les priorités</option>
              <option value="5">Priorité 5</option>
              <option value="4">Priorité 4</option>
              <option value="3">Priorité 3</option>
              <option value="2">Priorité 2</option>
              <option value="1">Priorité 1</option>
            </select>
          </div>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Priorité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.nom} {c.prenom}</td>
                <td>{c.priorité}</td>
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

        {filtered.length === 0 && (
          <p className="text-muted">Aucun citoyen trouvé pour cette priorité.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PageService;