import { useTareas } from "../context/TareasContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea, eliminarTarea } = useTareas();
  const navigate = useNavigate();

  return (
    <div className={`tarea-card ${completada ? "completada" : ""}`}>
      <input
        type="checkbox"
        className="checkbox"
        checked={completada}
        onChange={() => toggleTarea(id)}
      />
      <div style={{ flex: 1 }}>
        <p className="titulo">{titulo}</p>
        <div className="meta">
          <span>{materia}</span>
          <span>{fecha}</span>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn-ver" onClick={() => navigate(`/tarea/${id}`)}>Ver</button>
        <button className="btn-eliminar" onClick={() => eliminarTarea(id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default TareaCard;