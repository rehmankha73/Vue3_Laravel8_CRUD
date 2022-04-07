import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from '../components/company/CompanyIndex'
import CompanyCreate from "../components/company/CompanyCreate";
import CompanyEdit from "../components/company/CompanyEdit";

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompanyCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompanyEdit,
        props: true,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
