import { useState } from "react";
import type { Application } from "../../core/models/Application";

export default function useApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  const addApplication = (application: Application) => {
    setApplications((prev) => [...prev, application]);
  };

  const deleteApplication = (id: string) => {
  setApplications((prev) =>
    prev.filter((application) => application.id !== id)
  );
};

const updateApplication = (updatedApplication: Application) => {
  setApplications((prev) =>
    prev.map((application) =>
      application.id === updatedApplication.id
        ? updatedApplication
        : application
    )
  );
};

  return {
    applications,
    addApplication,
    deleteApplication,
    updateApplication,
  };
}