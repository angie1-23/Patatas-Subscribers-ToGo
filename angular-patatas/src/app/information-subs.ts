export interface InformationSubs {
    Activity?: string;
    Area?: string;
    ConnectionState?: number;
    CountryCode?: string;
    CountryName?:string;
    Email?: string;
    EndpointsCount?: number;
    Id?: number;
    JobTitle?: string;
    LastActivity?: any;
    LastActivityString?: any;
    LastActivityUtc?: any;
    Name?: string;
    PhoneCode?: string;
    PhoneCodeAndNumber?: string;
    PhoneNumber?: string;
    PublicId?: number;
    SubscriptionDate?: any;
    SubscriptionMethod?: number;
    SubscriptionState?: number;
    SubscriptionStateDescription?: string;
    SystemId?: any;
    Topics?: any[];
    ValidEmail?: boolean;
}

export interface HomeResponse{
    Count: number;
    Data: InformationSubs[];
}
