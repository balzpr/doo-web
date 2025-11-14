import {useNavigate, useLocation} from "react-router-dom";

// Base path untuk GitHub Pages
const BASE_PATH = import.meta.env.PROD ? "/doo-web" : "";

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-correct paths untuk production
  const appNavigate = (path, options) => {
    let correctedPath = path;

    // Jika di production dan path belum ada base path-nya
    if (import.meta.env.PROD && !path.startsWith(BASE_PATH) && path !== "/") {
      correctedPath = BASE_PATH + path;
    }

    console.log("Navigating to:", correctedPath);
    navigate(correctedPath, options);
  };

  return appNavigate;
};

// Hook untuk corrected link
export const useAppLink = () => {
  const createLink = (path) => {
    if (import.meta.env.PROD && !path.startsWith(BASE_PATH) && path !== "/") {
      return BASE_PATH + path;
    }
    return path;
  };

  return {createLink};
};
