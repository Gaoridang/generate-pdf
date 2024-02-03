type Route = Array<{
  fragment: string;
  component: () => string;
}>;

export default function createRouter() {
  const routes: Route = [];

  const router = {
    addRoute(fragment: string, component: () => string) {
      routes.push({ fragment, component });
      return this;
    },

    start() {
      const checkRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.fragment === window.location.hash
        );
        currentRoute.component();
      };

      window.addEventListener("hashchange", checkRoutes);
      checkRoutes();
    },
  };

  return router;
}
