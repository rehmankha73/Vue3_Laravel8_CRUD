import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from '../components/company/CompanyIndex'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
