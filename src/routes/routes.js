import Home from "../pages/home/home.page";


const routes = [
    {
        name: 'home',
        path: "/",
        component: Home,
        protected: false,
        exact: true
    }
]
export default routes;