import Home from "../pages/home/home.page";
import Valve from "../pages/valve/valve.page";
import RegisterScreen from "../pages/register/register.page";
import SignInScreen from "../pages/login/login.page";
import GrilleDetail from "../pages/valve/grille.detail";
import Contact from "../pages/contact/contact";
import About from "../pages/about/about";


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
        name: 'Grille detail',
        path: "/grille-detail/:classId",
        component:GrilleDetail,
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
    },
    {
        name: 'login',
        path: '/login',
        component: SignInScreen,
        protected: false,
        exact: true,
        nav: true
    },
    {
        name: 'contact-us',
        path: '/contact',
        component: Contact,
        protected: false,
        exact: true,
        nav: false
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        protected: false,
        exact: true,
        nav: false
    }
    
]
export default routes;