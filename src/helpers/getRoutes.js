import routes from '../routes/routes';
import routesAdm from '../routes/routesAdm';

export const protectedRoutes = routes.filter(route =>route.protected && route.nav);
export const protectedRoutesWithoutNav = routes.filter(route =>route.protected && !route.nav);
export const unProtectedRoutes = routes.filter(route =>!route.protected && route.nav);
export const unProtectedRoutesWithoutNav = routes.filter(route=> !route.protected && !route.nav);


export const unProtectedRoutesWithoutNavAdmin = routesAdm.filter(route=> !route.protected && !route.navAdm);
