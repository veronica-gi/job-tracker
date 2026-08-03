import type { Application } from "../../../../core/models/Application";
import "./ApplicationsList.css";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

export default function ApplicationsList({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <section className="applications-list">
      <h2>Candidaturas</h2>

      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
        />
      ))}
    </section>
  );
}