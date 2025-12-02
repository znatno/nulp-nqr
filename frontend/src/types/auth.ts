export type Role = 'VIEWER' | 'USER' | 'MANAGER';

export interface User {
    id: number;
    email: string;
    role: Role;
    canApplyForQualification?: boolean;
    canDevelopStandards?: boolean;
    canAccreditCenters?: boolean;
    hasCertificates?: boolean; // Derived from backend data
}
