<template>
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k"
             class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <form class="space-y-6" @submit.prevent="saveCompany">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label class="block text-sm font-medium text-gray-700" for="name">Name</label>
                <div class="mt-1">
                    <input id="name" v-model="form.name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           name="name"
                           type="text">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                <div class="mt-1">
                    <input id="email" v-model="form.email"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           name="email"
                           type="text">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700" for="address">Address</label>
                <div class="mt-1">
                    <input id="address" v-model="form.address"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           name="address"
                           type="text">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700" for="website">Website</label>
                <div class="mt-1">
                    <input id="website" v-model="form.website"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           name="website"
                           type="text">
                </div>
            </div>
        </div>

        <button
            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
            type="submit">
            Create
        </button>
    </form>
</template>

<script>
import { reactive }  from "vue";
import useCompanies from "../../composable/companies";

export default {

    setup() {

        const form = reactive({
            'name': '',
            'email': '',
            'address': '',
            'website': '',
        })

        const { errors, storeCompany } = useCompanies()

        const saveCompany = async () => {
            await storeCompany({...form});
        }

        return {
            form,
            errors,
            saveCompany,
        }
    }
}
</script>
