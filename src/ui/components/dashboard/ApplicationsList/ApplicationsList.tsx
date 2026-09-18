import type { Application } from "../../../../core/models/Application";
import "./ApplicationsList.css";
import ApplicationCard from "../ApplicationCard/ApplicationCard";

interface ApplicationsListProps {
  applications: Application[];
  deleteApplication: (id: string) => void;
}

export default function ApplicationsList({
  applications,
deleteApplication,
}: ApplicationsListProps) {
  console.log("PROPS ApplicationsList:", {
    applications,
    deleteApplication,
  });
  
  return (
    <section className="applications-list">
      <h2>Candidaturas</h2>

      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          deleteApplication={deleteApplication}
        />
      ))}
    </section>
  );
}