import type { Application } from "../../../../core/models/Application";
import "./ApplicationsList.css";

export default function ApplicationsList({
  applications,
}: {
  applications: Application[];
}) {
  return <h2>Candidaturas</h2>;
}