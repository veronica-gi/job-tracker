import { useState } from "react";
import type { Application } from "../../core/models/Application";

export default function useApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  const addApplication = (application: Application) => {
    setApplications((prev) => [...prev, application]);
  };

  return {
    applications,
    addApplication,
  };
}