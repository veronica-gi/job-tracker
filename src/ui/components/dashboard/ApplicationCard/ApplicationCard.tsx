import "./ApplicationCard.css";
import type { Application } from "../../../../core/models/Application";

interface ApplicationCardProps {
  application: Application;
}

export default function ApplicationCard({
  application,
}: ApplicationCardProps) {
  const statusLabels = {
    Applied: "Enviada",
    Interview: "Entrevista",
    Offer: "Oferta",
    Rejected: "Rechazada",
  };

  return (
    <article className="application-card">
      <h3>{application.company}</h3>
      <p>{application.position}</p>
      <span className={`status-badge status-${application.status.toLowerCase()}`}>
        {statusLabels[application.status]}
      </span>
      <p>{application.applicationDate}</p>
      <p>{application.notes}</p>
    </article>
  );
}