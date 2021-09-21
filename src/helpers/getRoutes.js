import routes from '../routes/routes';

export const protectedRoutes = routes.filter(route =>route.protected && route.nav);
export const protectedRoutesWithoutNav = routes.filter(route =>route.protected && !route.nav);
export const unProtectedRoutes = routes.filter(route =>!route.protected);