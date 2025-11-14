// 🔥 PASTE INI DI ATAS APP.JSX - 1 FILE FIX SEMUA!
const isProduction = import.meta.env.PROD;
const repoName = "doo-web"; // GANTI DENGAN NAMA REPO LU

// 🔧 MONKEY PATCH UNTUK SEMUA NAVIGATION
if (isProduction) {
  // Fix history.pushState
  const originalPushState = history.pushState;
  history.pushState = function (state, title, url) {
    if (url && !url.includes(repoName) && url !== "/") {
      url = `/${repoName}${url}`;
    }
    return originalPushState.call(this, state, title, url);
  };

  // Fix history.replaceState
  const originalReplaceState = history.replaceState;
  history.replaceState = function (state, title, url) {
    if (url && !url.includes(repoName) && url !== "/") {
      url = `/${repoName}${url}`;
    }
    return originalReplaceState.call(this, state, title, url);
  };

  // Fix router navigate
  const originalUseNavigate = () => {
    const navigate = (to, options) => {
      let correctedTo = to;
      if (typeof to === "string" && !to.includes(repoName) && to !== "/") {
        correctedTo = `/${repoName}${to}`;
      }
      // Use corrected path
      window.location.href = correctedTo;
    };
    return navigate;
  };

  // Override useNavigate globally
  window.__originalUseNavigate = window.React?.useNavigate;
}

// 🔧 AUTO-CORRECT HOOK
export const useFixedNavigate = () => {
  return (to, options) => {
    if (import.meta.env.PROD && typeof to === "string" && !to.includes(repoName) && to !== "/") {
      to = `/${repoName}${to}`;
    }
    window.location.href = to;
  };
};
