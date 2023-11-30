export interface AggredateDashboard{
status: string,
survey: Array<Survey>
}
export interface Survey{
    chartData:Array<ChartData>,
    followupAvg: string,
    name: string,
    recoveryAvg: string
}
export interface ChartData{
    count: string,
    label: string,
    surgicalStage: string,
    value: string
}