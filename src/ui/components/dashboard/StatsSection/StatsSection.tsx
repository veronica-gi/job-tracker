import StatsCard from "../StatsCard/StatsCard";
import type { Application } from "../../../../core/models/Application";
import "./StatsSection.css";

interface StatsSectionProps {
  applications: Application[];
}

export default function StatsSection({
  applications,
}: StatsSectionProps) {
  const totalApplications = applications.length;

  const interviewApplications = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const offerApplications = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  const rejectedApplications = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  return (
    <section className="stats-section">
      <StatsCard title="Candidaturas" value={totalApplications} />
      <StatsCard title="Entrevistas" value={interviewApplications} />
      <StatsCard title="Ofertas" value={offerApplications} />
      <StatsCard title="Rechazadas" value={rejectedApplications} />
    </section>
  );
}