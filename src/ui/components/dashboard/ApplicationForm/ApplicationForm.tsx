import { useState, type SubmitEvent } from "react";
import "./ApplicationForm.css";
import type { Application, ApplicationStatus} from "../../../../core/models/Application";

interface ApplicationFormProps {
  addApplication: (application: Application) => void;
}

export default function ApplicationForm({
  addApplication,
}: ApplicationFormProps) {

  
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState<ApplicationStatus>("Applied");
  const [applicationDate, setApplicationDate] = useState("");
  const [notes, setNotes] = useState("");

  
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();

  const application: Application = {
  id: crypto.randomUUID(),
    company,
    position,
    status,
    applicationDate,
    notes,
  };

addApplication(application);

setCompany("");
  setPosition("");
  setStatus("Applied");
  setApplicationDate("");
  setNotes("");
};

  return (
    <section className="application-form">
      <h2>Nueva candidatura</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            type="text"
            placeholder="Nombre de la empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Puesto</label>
          <input
            id="position"
            type="text"
            placeholder="Puesto al que te has inscrito"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select id="status"
          value={status}
          onChange={(e) =>
          setStatus(e.target.value as ApplicationStatus)
          }
          >
            <option value="Applied">Enviada</option>
            <option value="Interview">Entrevista</option>
            <option value="Offer">Oferta</option>
            <option value="Rejected">Rechazada</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="applicationDate">Fecha de solicitud</label>
          <input id="applicationDate"
          type="date"
          value={applicationDate}
          onChange={(e) => setApplicationDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notas</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Añade cualquier información relevante..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit">Guardar candidatura</button>
      </form>
    </section>
  );
}