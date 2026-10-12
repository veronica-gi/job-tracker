
import { useEffect, useState } from "react";
import type { Application } from "../../core/models/Application";

const STORAGE_KEY = "job-tracker-applications";

export default function useApplications() {
  const [applications, setApplications] = useState<Application[]>(() => {
    try {
      const savedApplications = localStorage.getItem(STORAGE_KEY);

      return savedApplications ? JSON.parse(savedApplications) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

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
