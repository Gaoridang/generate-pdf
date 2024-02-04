type Route = Array<{
  fragment: string;
  component: () => string;
}>;

export default function createRouter() {
  const routes: Route = [];

  function checkRoutes() {
    if (!window.location.hash) return;
    const currentRoute = routes.find((route) => route.fragment === window.location.hash);
    currentRoute.component();
  }

  const router = {
    addRoute(fragment: string, component: () => string) {
      routes.push({ fragment, component });
      return this;
    },

    navigate(fragment: string) {
      window.location.hash = fragment;
      checkRoutes();
    },

    start() {
      window.addEventListener("hashchange", checkRoutes);
      checkRoutes();
    },
  };

  return router;
}
