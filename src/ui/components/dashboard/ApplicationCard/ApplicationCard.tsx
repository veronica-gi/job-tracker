import "./ApplicationCard.css";
import type { Application } from "../../../../core/models/Application";

interface ApplicationCardProps {
  application: Application;
  deleteApplication: (id: string) => void;
}

export default function ApplicationCard({
  application,
  deleteApplication,
}: ApplicationCardProps) {
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
      <h3>{application.company}</h3>
      <p>{application.position}</p>
      <span className="status-badge">
        {statusLabels[application.status]}
      </span>
      <p>{application.applicationDate}</p>
      <p>{application.notes}</p>

      <button onClick={() => deleteApplication(application.id)}>
        Eliminar
      </button>
    </article>
    
  );
}