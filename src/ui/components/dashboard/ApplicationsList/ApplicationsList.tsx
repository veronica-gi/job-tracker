import type { Application } from "../../../../core/models/Application";
import "./ApplicationsList.css";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

interface ApplicationsListProps {
  applications: Application[];
  deleteApplication: (id: string) => void;
  updateApplication: (updatedApplication: Application) => void;
}

export default function ApplicationsList({
  applications,
deleteApplication,
updateApplication,
}: ApplicationsListProps) {
    
  return (
    <section className="applications-list">
      <h2>Candidaturas</h2>

      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          deleteApplication={deleteApplication}
          updateApplication={updateApplication}
        />
      ))}
    </section>
  );
}