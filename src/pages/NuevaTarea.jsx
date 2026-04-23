import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <div className="form-card">
      <h2>Nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Título", name: "titulo", type: "text" },
          { label: "Materia", name: "materia", type: "text" },
          { label: "Fecha", name: "fecha", type: "date" },
        ].map(({ label, name, type }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="form-actions">
          <button type="submit" className="btn-submit">Agregar tarea</button>
          <button type="button" className="btn-cancel" onClick={() => navigate("/")}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevaTarea;