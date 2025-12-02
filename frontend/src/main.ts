import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/assets/main.css';   // Tailwind directives
import { useAuth } from '@/composables/useAuth';

const app = createApp(App);
app.use(router);

// Initialize auth state on app load
const { initAuth } = useAuth();
initAuth();

app.mount('#app');
