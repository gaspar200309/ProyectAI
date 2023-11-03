import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const targetElement = document.documentElement; // Utiliza el elemento HTML para desplazarte al inicio
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto", block: "start" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location.pathname]);

  return null;
};
