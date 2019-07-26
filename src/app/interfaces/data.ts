export interface Data {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: any[]
}
export interface Response {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: Data
}