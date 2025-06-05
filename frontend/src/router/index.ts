import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import Qualifications from '@/pages/Qualifications.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AdminLayout,
            children: [ { path: '', component: Qualifications } ]
        }
    ]
});