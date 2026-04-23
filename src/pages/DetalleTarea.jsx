import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();
  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) return <p>Tarea no encontrada.</p>;

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate("/");
  }

  return (
    <div className="detalle-card">
      <h2>{tarea.titulo}</h2>
      <div className="detalle-row">
        <span className="detalle-label">Materia</span>
        <span className="detalle-valor">{tarea.materia}</span>
      </div>
      <div className="detalle-row">
        <span className="detalle-label">Fecha</span>
        <span className="detalle-valor">{tarea.fecha}</span>
      </div>
      <div className="detalle-row">
        <span className="detalle-label">Estado</span>
        <span className="detalle-valor">{tarea.completada ? "Completada" : "Pendiente"}</span>
      </div>
      <div className="detalle-actions">
        <button className="btn-cancel" onClick={() => navigate("/")}>← Volver</button>
        <button className="btn-eliminar" onClick={handleEliminar}>Eliminar tarea</button>
      </div>
    </div>
  );
}

export default DetalleTarea;