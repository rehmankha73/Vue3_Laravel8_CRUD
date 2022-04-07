require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from "./router/index";
import CompanyIndex from './components/company/CompanyIndex'

createApp({
    components: {
        CompanyIndex
    },
}).use(router).mount('#app');
