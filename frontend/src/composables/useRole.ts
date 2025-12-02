import { computed } from 'vue';
import { useAuth } from './useAuth';
import type { User } from '@/types/auth';

/**
 * Helper functions to check user roles and capabilities
 */
export function useRole() {
    const { user } = useAuth();

    const isManager = computed(() => {
        return user.value?.role === 'MANAGER';
    });

    const isApplicant = computed(() => {
        return user.value?.role === 'USER' && user.value?.canApplyForQualification === true;
    });

    const isDeveloper = computed(() => {
        return user.value?.role === 'USER' && user.value?.canDevelopStandards === true;
    });

    const isExpert = computed(() => {
        return user.value?.role === 'USER' && user.value?.canAccreditCenters === true;
    });

    const isViewer = computed(() => {
        return !user.value || user.value.role === 'VIEWER';
    });

    const hasCertificates = computed(() => {
        return user.value?.hasCertificates === true;
    });

    /**
     * Check if user has any management capability
     */
    const hasManagementAccess = computed(() => {
        return isManager.value || isApplicant.value || isDeveloper.value || isExpert.value;
    });

    return {
        isManager,
        isApplicant,
        isDeveloper,
        isExpert,
        isViewer,
        hasCertificates,
        hasManagementAccess,
    };
}

/**
 * Standalone helper functions (for use outside components)
 */
export function isManager(user: User | null | undefined): boolean {
    return user?.role === 'MANAGER';
}

export function isApplicant(user: User | null | undefined): boolean {
    return user?.role === 'USER' && user?.canApplyForQualification === true;
}

export function isDeveloper(user: User | null | undefined): boolean {
    return user?.role === 'USER' && user?.canDevelopStandards === true;
}

export function isExpert(user: User | null | undefined): boolean {
    return user?.role === 'USER' && user?.canAccreditCenters === true;
}

export function isViewer(user: User | null | undefined): boolean {
    return !user || user.role === 'VIEWER';
}

export function hasCertificates(user: User | null | undefined): boolean {
    return user?.hasCertificates === true;
}
