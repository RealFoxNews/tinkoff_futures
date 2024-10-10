export interface IFDA {
    commentary: string;
    companies: [
        {
            cik: string;
            id: string;
            name: string;
            securities: {
                exchange: string;
                symbol: string;
            }[];
        }
    ];
    created: number;
    date: string;
    drug: {
        generic: false;
        id: string;
        indication_symptom: string[];
        name: string;
    };
    event_type: string;
    id: string;
    nic_number: string;
    notes: string;
    outcome: string;
    outcome_brief: string;
    source_link: string;
    source_type: string;
    status: string;
    target_date: string;
    time: string;
    updated: number;
}
export interface IShortFDA {
    date: string;
    status: string;
    drugName: string;
    companies: {
        name: string;
        exchange: {
            exchange: string;
            symbol: string;
        }[];
    }[];
    notes: string;
    source_link: string;
}
