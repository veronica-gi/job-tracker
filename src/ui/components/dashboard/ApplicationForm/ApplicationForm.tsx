import "./ApplicationForm.css";

export default function ApplicationForm() {
  return (
    <section className="application-form">
      <h2>Nueva candidatura</h2>

      <form>
        <div className="form-group">
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            type="text"
            placeholder="Nombre de la empresa"
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Puesto</label>
          <input
            id="position"
            type="text"
            placeholder="Puesto al que te has inscrito"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select id="status">
            <option value="Applied">Enviada</option>
            <option value="Interview">Entrevista</option>
            <option value="Offer">Oferta</option>
            <option value="Rejected">Rechazada</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="applicationDate">Fecha de solicitud</label>
          <input id="applicationDate" type="date" />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notas</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Añade cualquier información relevante..."
          />
        </div>

        <button type="submit">Guardar candidatura</button>
      </form>
    </section>
  );
}