import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";
import { useTareas } from "./context/TareasContext";

function App() {
  const { tareas } = useTareas();
  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={pendientes} />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/nueva" element={<NuevaTarea />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
