import { createContext, useContext, useState, useEffect } from "react";
import { tareasIniciales } from "../data/tareas";

const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  }

  function agregarTarea(form) {
    const nueva = { ...form, id: Date.now(), completada: false };
    setTareas([...tareas, nueva]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}