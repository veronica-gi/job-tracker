import { useState } from "react";
import "./ApplicationCard.css";
import type { Application } from "../../../../core/models/Application";

interface ApplicationCardProps {
  application: Application;
  deleteApplication: (id: string) => void;
  updateApplication: (updatedApplication: Application) => void;
}

export default function ApplicationCard({
  application,
  deleteApplication,
  updateApplication,
}: ApplicationCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState(application.company);
  const [position, setPosition] = useState(application.position);
  const [status, setStatus] = useState<Application["status"]>(
    application.status
  );
  const [applicationDate, setApplicationDate] = useState(
    application.applicationDate
  );
  const [notes, setNotes] = useState(application.notes);

  const handleUpdate = () => {
  updateApplication({
    ...application,
    company,
    position,
    status,
    applicationDate,
    notes,
  });

  setIsEditing(false);
};

  const statusLabels = {
    Applied: "Enviada",
    Interview: "Entrevista",
    Offer: "Oferta",
    Rejected: "Rechazada",
  };

  return (
     <article
      className={`application-card status-${application.status.toLowerCase()}`}
    >
      
    {isEditing ? (
      <div className="application-edit-form">
        <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />

        <input
          type="text"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as Application["status"])
          }
        >
          <option value="Applied">Enviada</option>
          <option value="Interview">Entrevista</option>
          <option value="Offer">Oferta</option>
          <option value="Rejected">Rechazada</option>
        </select>

        <input
          type="date"
          value={applicationDate}
          onChange={(event) => setApplicationDate(event.target.value)}
        />

        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />

        <button type="button" onClick={handleUpdate}>
          Guardar
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
        >
          Cancelar
        </button>
      </div>
    ) : (
      <>
        <h3>{application.company}</h3>
        <p>{application.position}</p>

        <span className="status-badge">
          {statusLabels[application.status]}
        </span>

        <p>{application.applicationDate}</p>
        <p>{application.notes}</p>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Editar
        </button>

        <button
          type="button"
          onClick={() => deleteApplication(application.id)}
        >
          Eliminar
        </button>
      </>
    )}
  </article>
);
}