import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";

function ListaTareas() {
  const { tareas } = useTareas();
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("todas");

  const filtradas = tareas.filter(t => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <div className="action-bar">
        <div className="filtros">
          {["todas", "pendientes", "completadas"].map(f => (
            <button
              key={f}
              className={filtro === f ? "activo" : ""}
              onClick={() => setFiltro(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button className="btn-nueva" onClick={() => navigate("/nueva")}>
          + Nueva tarea
        </button>
      </div>
      {filtradas.map(t => <TareaCard key={t.id} {...t} />)}
    </div>
  );
}

export default ListaTareas;