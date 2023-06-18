import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [query, setQuery] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = query === "";
      return;
    }

    if (query === "") {
      setError(true);
      setMensaje("Ingresar parametros de búsqueda");
      return;
    }

    if (query.length < 5) {
      setError(true);
      setMensaje("Minimo de 5 caracteres");
      return;
    }

    setError(false);
  }, [query]);

  return { error, mensaje, query, setQuery };
}
