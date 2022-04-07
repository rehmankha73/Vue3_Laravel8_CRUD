import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from '../components/company/CompanyIndex'
import CompanyCreate from "../components/company/CompanyCreate";

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
]

export default createRouter({
    history: createWebHistory(),
    routes
})
