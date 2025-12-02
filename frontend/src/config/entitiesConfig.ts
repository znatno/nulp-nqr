export interface EntityColumn {
    key: string;
    label: string;
    sortable?: boolean;
}

export interface EntityFormField {
    key: string;
    label: string;
    type: 'text' | 'textarea' | 'number' | 'select';
    required?: boolean;
    options?: { value: string | number; label: string }[];
}

export interface EntityConfig {
    apiBasePath: string;
    columns: EntityColumn[];
    formFields: EntityFormField[];
    searchableFields: string[];
    defaultSort?: {
        field: string;
        direction: 'asc' | 'desc';
    };
}

export const entitiesConfig: Record<string, EntityConfig> = {
    centres: {
        apiBasePath: '/centres',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Назва', sortable: true },
            { key: 'edrpou', label: 'ЄДРПОУ', sortable: true },
            { key: 'address', label: 'Адреса', sortable: false },
        ],
        formFields: [
            { key: 'name', label: 'Назва', type: 'text', required: true },
            { key: 'edrpou', label: 'ЄДРПОУ', type: 'text', required: true },
            { key: 'address', label: 'Адреса', type: 'textarea', required: true },
        ],
        searchableFields: ['name', 'edrpou', 'address'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    developers: {
        apiBasePath: '/developers',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Назва', sortable: true },
            { key: 'edrpou', label: 'ЄДРПОУ', sortable: true },
        ],
        formFields: [
            { key: 'name', label: 'Назва', type: 'text', required: true },
            { key: 'edrpou', label: 'ЄДРПОУ', type: 'text', required: false },
        ],
        searchableFields: ['name', 'edrpou'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    professions: {
        apiBasePath: '/professions',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Назва', sortable: true },
            { key: 'code', label: 'Код', sortable: true },
            { key: 'developer', label: 'Розробник', sortable: false },
        ],
        formFields: [
            { key: 'name', label: 'Назва', type: 'text', required: true },
            { key: 'code', label: 'Код', type: 'text', required: true },
            { key: 'developerId', label: 'ID Розробника', type: 'number', required: true },
        ],
        searchableFields: ['name', 'code'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    professionalQualifications: {
        apiBasePath: '/professional-qualifications',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Назва', sortable: true },
            { key: 'nkrLevel', label: 'Рівень НКР', sortable: true },
            { key: 'profession', label: 'Професія', sortable: false },
        ],
        formFields: [
            { key: 'name', label: 'Назва', type: 'text', required: true },
            { key: 'nkrLevel', label: 'Рівень НКР', type: 'number', required: true },
            { key: 'professionId', label: 'ID Професії', type: 'number', required: true },
        ],
        searchableFields: ['name'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    persons: {
        apiBasePath: '/persons',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'fullName', label: 'ПІБ', sortable: true },
            { key: 'qualificationCenter', label: 'Кваліфікаційний центр', sortable: false },
            { key: 'professionalQualification', label: 'Профкваліфікація', sortable: false },
            { key: 'dateReceived', label: 'Дата отримання', sortable: true },
        ],
        formFields: [
            { key: 'fullName', label: 'ПІБ', type: 'text', required: true },
            { key: 'qualificationCenterId', label: 'ID Кваліфікаційного центру', type: 'number', required: true },
            { key: 'professionalQualificationId', label: 'ID Профкваліфікації', type: 'number', required: true },
            { key: 'dateReceived', label: 'Дата отримання', type: 'text', required: false },
        ],
        searchableFields: ['fullName'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    accreditations: {
        apiBasePath: '/accreditations',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'certificateNumber', label: 'Номер свідоцтва', sortable: true },
            { key: 'professionalQualification', label: 'Профкваліфікація', sortable: false },
            { key: 'qualificationCenter', label: 'Кваліфікаційний центр', sortable: false },
            { key: 'sessionNQADate', label: 'Дата засідання НАК', sortable: true },
        ],
        formFields: [
            { key: 'certificateNumber', label: 'Номер свідоцтва', type: 'text', required: true },
            { key: 'professionalQualificationId', label: 'ID Профкваліфікації', type: 'number', required: true },
            { key: 'qualificationCenterId', label: 'ID Кваліфікаційного центру', type: 'number', required: true },
            { key: 'sessionNQADate', label: 'Дата засідання НАК', type: 'text', required: false },
        ],
        searchableFields: ['certificateNumber'],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
    examinations: {
        apiBasePath: '/examinations',
        columns: [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'professionalQualification', label: 'Профкваліфікація', sortable: false },
            { key: 'qualificationCenter', label: 'Кваліфікаційний центр', sortable: false },
            { key: 'expert', label: 'Експерт', sortable: false },
            { key: 'examinationDate', label: 'Дата експертизи', sortable: true },
        ],
        formFields: [
            { key: 'professionalQualificationId', label: 'ID Профкваліфікації', type: 'number', required: true },
            { key: 'qualificationCenterId', label: 'ID Кваліфікаційного центру', type: 'number', required: true },
            { key: 'expertId', label: 'ID Експерта', type: 'number', required: true },
            { key: 'examinationDate', label: 'Дата експертизи', type: 'text', required: false },
        ],
        searchableFields: [],
        defaultSort: {
            field: 'id',
            direction: 'asc',
        },
    },
};
