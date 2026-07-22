import { useState } from "react";
import type { Application } from "../../core/models/Application";

export default function useApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  return {
    applications,
    setApplications,
  };
}