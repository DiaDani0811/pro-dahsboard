export class BaseConfig {
    comparison: comparisonData;
    filters: filterData;
    fromRange: string;
    l3Filter: string;
    l3SubFilter: string;
    mako: string;
    metricCatId: number;
    metricId: number;
    period: string;
    scoreType: string;
    toRange: string;
    button:string
}
export class filterData {
    cnId: string
    hospitalId: string;
    payor: string;
    sosId: string;
    surgeonId: string;
    surgicalStage: string;
}
export class comparisonData {
    enable: boolean;
    fromRange: string;
    toRange: string;
}
