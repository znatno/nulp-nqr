import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import HomeView from '@/pages/HomeView.vue';
import QualificationsView from '@/pages/QualificationsView.vue';
import CentersView from '@/pages/CentersView.vue';
import PersonsView from '@/pages/PersonsView.vue';
import LoginView from '@/pages/LoginView.vue';
import ManagerCentresView from '@/pages/ManagerCentresView.vue';
import ManagerDevelopersView from '@/pages/ManagerDevelopersView.vue';
import ManagerProfessionsView from '@/pages/ManagerProfessionsView.vue';
import ManagerProfessionalQualificationsView from '@/pages/ManagerProfessionalQualificationsView.vue';
import ManagerPersonsView from '@/pages/ManagerPersonsView.vue';
import ManagerAccreditationsView from '@/pages/ManagerAccreditationsView.vue';
import ManagerExaminationsView from '@/pages/ManagerExaminationsView.vue';
import ManagerDashboardGlobalView from '@/pages/ManagerDashboardGlobalView.vue';
import ManagerDashboardCentreView from '@/pages/ManagerDashboardCentreView.vue';
import ManagerReportsView from '@/pages/ManagerReportsView.vue';
import { useAuth } from '@/composables/useAuth';
import { isManager, isApplicant, isDeveloper, isExpert } from '@/composables/useRole';
import type { Role } from '@/types/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: { public: true, title: 'Вхід' },
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/pages/RegisterView.vue'),
            meta: { public: true, title: 'Реєстрація' },
        },
        {
            path: '/verify',
            name: 'verify-certificate',
            component: AdminLayout,
            meta: { public: true },
            children: [
                {
                    path: '',
                    name: 'verify',
                    component: () => import('@/pages/ViewerVerifyCertificateView.vue'),
                    meta: { public: true, title: 'Перевірка сертифікату' },
                },
            ],
        },
        {
            path: '/',
            component: AdminLayout,
            meta: { public: true },
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView,
                    meta: { public: true, title: 'Головна' },
                },
                {
                    path: 'qualifications',
                    name: 'qualifications',
                    component: QualificationsView,
                    meta: { public: true, title: 'Професійні кваліфікації' },
                },
                {
                    path: 'centers',
                    name: 'centers',
                    component: CentersView,
                    meta: { public: true, title: 'Кваліфікаційні центри' },
                },
                {
                    path: 'persons',
                    name: 'persons',
                    component: PersonsView,
                    meta: { public: true, title: 'Зареєстровані особи' },
                },
            ],
        },
        {
            path: '/manager',
            component: AdminLayout,
            meta: { requiresManager: true },
            children: [
                {
                    path: '',
                    name: 'manager-home',
                    component: ManagerDashboardGlobalView,
                    meta: { requiresManager: true, title: 'Панель менеджера' },
                },
                {
                    path: 'dashboard',
                    name: 'manager-dashboard',
                    component: ManagerDashboardGlobalView,
                    meta: { requiresManager: true, title: 'Панель менеджера' },
                },
                {
                    path: 'dashboard/centre/:centreId?',
                    name: 'manager-dashboard-centre',
                    component: ManagerDashboardCentreView,
                    meta: { requiresManager: true, title: 'Панель центру' },
                },
                {
                    path: 'users',
                    name: 'manager-users',
                    component: () => import('@/pages/ManagerUsersView.vue'),
                    meta: { requiresManager: true, title: 'Користувачі' },
                },
                {
                    path: 'applications',
                    name: 'manager-applications',
                    component: () => import('@/pages/ManagerApplicationsView.vue'),
                    meta: { requiresManager: true, title: 'Заявки' },
                },
                {
                    path: 'applications/:id',
                    name: 'manager-application-detail',
                    component: () => import('@/pages/ManagerApplicationDetailView.vue'),
                    meta: { requiresManager: true, title: 'Деталі заявки' },
                },
                {
                    path: 'test-sessions',
                    name: 'manager-test-sessions',
                    component: () => import('@/pages/ManagerTestSessionsView.vue'),
                    meta: { requiresManager: true, title: 'Тести / Оцінювання' },
                },
                {
                    path: 'centres',
                    name: 'manager-centres',
                    component: ManagerCentresView,
                    meta: { roles: ['MANAGER'], title: 'Кваліфікаційні центри' },
                },
                {
                    path: 'centres/:centreId/dashboard',
                    name: 'manager-centre-dashboard',
                    component: ManagerDashboardCentreView,
                    meta: { roles: ['MANAGER'], title: 'Панель центру' },
                },
                {
                    path: 'developers',
                    name: 'manager-developers',
                    component: ManagerDevelopersView,
                    meta: { roles: ['MANAGER'], title: 'Розробники стандартів' },
                },
                {
                    path: 'professions',
                    name: 'manager-professions',
                    component: ManagerProfessionsView,
                    meta: { roles: ['MANAGER'], title: 'Професії' },
                },
                {
                    path: 'professional-qualifications',
                    name: 'manager-professional-qualifications',
                    component: ManagerProfessionalQualificationsView,
                    meta: { roles: ['MANAGER'], title: 'Профкваліфікації' },
                },
                {
                    path: 'persons',
                    name: 'manager-persons',
                    component: ManagerPersonsView,
                    meta: { roles: ['MANAGER'], title: 'Особи' },
                },
                {
                    path: 'accreditations',
                    name: 'manager-accreditations',
                    component: ManagerAccreditationsView,
                    meta: { roles: ['MANAGER'], title: 'Акредитації' },
                },
                {
                    path: 'experts',
                    name: 'manager-experts',
                    component: () => import('@/pages/ManagerExpertsView.vue'),
                    meta: { roles: ['MANAGER'], title: 'Експерти' },
                },
                {
                    path: 'examinations',
                    name: 'manager-examinations',
                    component: ManagerExaminationsView,
                    meta: { roles: ['MANAGER'], title: 'Експертизи' },
                },
                {
                    path: 'reports',
                    name: 'manager-reports',
                    component: ManagerReportsView,
                    meta: { roles: ['MANAGER'], title: 'Звіти' },
                },
            ],
        },
        {
            path: '/applicant',
            component: AdminLayout,
            meta: { requiresApplicant: true },
            children: [
                {
                    path: '',
                    name: 'applicant-home',
                    component: () => import('@/pages/ApplicantApplicationsView.vue'),
                    meta: { requiresApplicant: true, title: 'Мої заявки' },
                },
                {
                    path: 'centres',
                    name: 'applicant-centres',
                    component: () => import('@/pages/ApplicantCentresView.vue'),
                    meta: { requiresApplicant: true, title: 'Кваліфікаційні центри' },
                },
                {
                    path: 'applications',
                    name: 'applicant-applications',
                    component: () => import('@/pages/ApplicantApplicationsView.vue'),
                    meta: { requiresApplicant: true, title: 'Мої заявки' },
                },
                {
                    path: 'applications/:id',
                    name: 'applicant-application-detail',
                    component: () => import('@/pages/ApplicantApplicationDetailView.vue'),
                    meta: { requiresApplicant: true, title: 'Деталі заявки' },
                },
                {
                    path: 'certificates',
                    name: 'applicant-certificates',
                    component: () => import('@/pages/ApplicantCertificatesView.vue'),
                    meta: { requiresApplicant: true, title: 'Мої сертифікати' },
                },
            ],
        },
        {
            path: '/developer',
            component: AdminLayout,
            meta: { requiresDeveloper: true },
            children: [
                {
                    path: '',
                    name: 'developer-home',
                    component: () => import('@/pages/DeveloperDashboardView.vue'),
                    meta: { requiresDeveloper: true, title: 'Панель розробника' },
                },
                {
                    path: 'professions',
                    name: 'developer-professions',
                    component: () => import('@/pages/DeveloperProfessionsView.vue'),
                    meta: { requiresDeveloper: true, title: 'Мої професії' },
                },
                {
                    path: 'qualifications',
                    name: 'developer-qualifications',
                    component: () => import('@/pages/DeveloperQualificationsView.vue'),
                    meta: { requiresDeveloper: true, title: 'Мої профкваліфікації' },
                },
            ],
        },
        {
            path: '/expert',
            component: AdminLayout,
            meta: { requiresExpert: true },
            children: [
                {
                    path: '',
                    name: 'expert-home',
                    component: () => import('@/pages/ExpertDashboardView.vue'),
                    meta: { requiresExpert: true, title: 'Панель експерта' },
                },
                {
                    path: 'expertises',
                    name: 'expert-expertises',
                    component: () => import('@/pages/ExpertExpertisesView.vue'),
                    meta: { requiresExpert: true, title: 'Мої експертизи' },
                },
            ],
        },
    ],
});

// Navigation guard
router.beforeEach((to, _from, next) => {
    const { isAuthenticated, user, initAuth } = useAuth();
    
    // Initialize auth state from localStorage
    initAuth();

    // Public routes - accessible to everyone
    if (to.meta.public) {
        // For login/register, redirect logged-in users to their home
        if (isAuthenticated.value && user.value && (to.name === 'login' || to.name === 'register')) {
            const roleHome = getRoleHome(user.value);
            if (to.path !== roleHome) {
                next(roleHome);
                return;
            }
        }
        next();
        return;
    }

    // Protected routes - require authentication
    if (!isAuthenticated.value || !user.value) {
        // Not logged in - redirect to login
        next({ name: 'login', query: { redirect: to.fullPath } });
        return;
    }

    // Check capability-based access
    if (to.meta.requiresManager) {
        if (!isManager(user.value)) {
            next(getRoleHome(user.value));
            return;
        }
    }

    if (to.meta.requiresApplicant) {
        if (!isApplicant(user.value)) {
            next(getRoleHome(user.value));
            return;
        }
    }

    if (to.meta.requiresDeveloper) {
        if (!isDeveloper(user.value)) {
            next(getRoleHome(user.value));
            return;
        }
    }

    if (to.meta.requiresExpert) {
        if (!isExpert(user.value)) {
            next(getRoleHome(user.value));
            return;
        }
    }

    // Legacy role-based check (for backward compatibility)
    const requiredRoles = to.meta.roles as Role[] | undefined;
    if (requiredRoles && requiredRoles.length > 0) {
        if (!user.value.role || !requiredRoles.includes(user.value.role)) {
            next(getRoleHome(user.value));
            return;
        }
    }

    next();
});

// Update document title based on route meta
router.afterEach((to) => {
    const title = to.meta.title as string | undefined;
    if (title) {
        document.title = `${title} — NQF Register`;
    } else {
        document.title = 'NQF Register — Національний реєстр кваліфікацій';
    }
});

function getRoleHome(user: { role: Role; canApplyForQualification?: boolean; canDevelopStandards?: boolean; canAccreditCenters?: boolean }): string {
    if (user.role === 'MANAGER') {
        return '/manager';
    }
    if (user.role === 'USER' && user.canApplyForQualification) {
        return '/applicant';
    }
    if (user.role === 'USER' && user.canDevelopStandards) {
        return '/developer';
    }
    if (user.role === 'USER' && user.canAccreditCenters) {
        return '/expert';
    }
    return '/';
}

export default router;