import type { Application } from "../../../../core/models/Application";
import "./ApplicationsList.css";

export default function ApplicationsList({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <section className="applications-list">
      <h2>Candidaturas</h2>

      {applications.map((application) => (
        <div key={application.id}>
          <h3>{application.company}</h3>
          <p>{application.position}</p>
          <p>{application.status}</p>
          <p>{application.applicationDate}</p>
          <p>{application.notes}</p>
        </div>
      ))}
    </section>
  );
}