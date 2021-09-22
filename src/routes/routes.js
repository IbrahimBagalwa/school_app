import Home from "../pages/home/home.page";
import Valve from "../pages/valve/valve.page";
import RegisterScreen from "../pages/register/register.page";


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
    },
    {
        name:'register',
        path: '/register',
        component: RegisterScreen,
        protected: false,
        exact: true,
        nav: true
    }
]
export default routes;