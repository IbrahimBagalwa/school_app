import Cours from "../admin/pages/cours";


const routesAdm =[
    {
        name: 'cours',
        path: "/cours",
        component: Cours,
        protected: true,
        exact: true,
        navAdm: true
    },
]

export default routesAdm;