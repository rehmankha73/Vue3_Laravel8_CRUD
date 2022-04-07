import { ref } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router'

export default function useCompanies() {

    const companies = ref([]);
    const router = useRouter();

    const errors = ref('');

    const getCompanies = async () => {
        let response = await axios.get('/api/companies');
        companies.value = response.data.data;
    }

    const storeCompany = async (data) => {
        await axios.post('/api/companies/', data);
        await router.push({name: 'companies.index'})
    }

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id);
    }

    return {
        errors,
        companies,
        getCompanies,
        storeCompany,
        destroyCompany,
    }
}
