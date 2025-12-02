import { ref, computed } from 'vue';
import { api } from '@/services/api';
import type { Role, User } from '@/types/auth';

interface LoginResponse {
    token: string;
    user: User;
}

const STORAGE_KEY = 'auth_token';
const STORAGE_USER_KEY = 'auth_user';

// Reactive state
const token = ref<string | null>(localStorage.getItem(STORAGE_KEY));
const getInitialUser = (): User | null => {
    const stored = localStorage.getItem(STORAGE_USER_KEY);
    return stored ? JSON.parse(stored) : null;
};
const user = ref<User | null>(getInitialUser());

// Computed
const isAuthenticated = computed(() => !!token.value && !!user.value);
const userRole = computed(() => user.value?.role || null);
const userEmail = computed(() => user.value?.email || null);

/**
 * Login with email and password
 */
async function login(email: string, password: string): Promise<void> {
    try {
        const response = await api.post<LoginResponse>('/auth/login', { email, password });
        setFromTokenPayload(response.data.token, response.data.user);
    } catch (err: any) {
        // Re-throw with better error message
        const errorMessage = err.response?.data?.error || err.message || 'Login failed';
        throw new Error(errorMessage);
    }
}

/**
 * Logout - clear auth state
 */
function logout(): void {
    token.value = null;
    user.value = null;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_USER_KEY);
}

/**
 * Set auth state from token and user data
 */
function setFromTokenPayload(newToken: string, userData: User): void {
    token.value = newToken;
    user.value = userData;
    localStorage.setItem(STORAGE_KEY, newToken);
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(userData));
}

/**
 * Initialize auth state from localStorage on app load
 */
function initAuth(): void {
    const storedToken = localStorage.getItem(STORAGE_KEY);
    const storedUser = localStorage.getItem(STORAGE_USER_KEY);
    
    if (storedToken && storedUser) {
        token.value = storedToken;
        try {
            user.value = JSON.parse(storedUser);
        } catch (e) {
            console.error('Failed to parse stored user data', e);
            logout();
        }
    }
}

export function useAuth() {
    return {
        // State
        token,
        user,
        isAuthenticated,
        userRole,
        userEmail,
        // Methods
        login,
        logout,
        setFromTokenPayload,
        initAuth,
    };
}
