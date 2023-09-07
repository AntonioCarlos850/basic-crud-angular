export default interface List<T>{
    current_page: number
    data: T[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    per_page: number
    to: number
    total: number
}