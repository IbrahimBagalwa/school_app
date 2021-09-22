import Home from "../pages/home/home.page";
import Valve from "../pages/valve/valve.page";


const routes = [
    {
        name: 'home',
        path: "/",
        component: Home,
        protected: false,
        exact: true,
        nav: false
    },
    {
        name: 'valve',
        path: "/valve",
        component: Valve,
        protected: false,
        exact: true,
        nav: false
    }
]
export default routes;