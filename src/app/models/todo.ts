
export interface Todo {
    id:          number;
    name:         string;
    sortOrder:    number;
    creationDate: Date;
    lastUpdate:   Date;
    status:       string;
    itemVariants: Variant[];
    categories:   Category[];
    goals:        Goal[];
    actions:      Action[];
}

export interface Action {
    _id:            number;
    name:           string;
    actionVariants: Variant[];
}

export interface Variant {
    _id:           number;
    description:   string;
    serviceTypes:  ServiceType[];
    businessTypes: BusinessType[];
    name?:         ItemVariantName;
}

export enum BusinessType {
    LeadGen = "lead_gen",
}

export enum ItemVariantName {
    Variant1 = "Variant 1",
    Variant2 = "Variant 2",
}

export enum ServiceType {
    Adwords = "adwords",
}

export interface Category {
    _id:  number;
    name: CategoryName;
}

export enum CategoryName {
    Budget = "Budget",
    CPA = "CPA",
}

export interface Goal {
    _id:     number;
    name:    string;
    summary: string;
}
