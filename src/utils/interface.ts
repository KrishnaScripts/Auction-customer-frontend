export interface SelectOption {
    label: string
    value: string
}

export interface FilterData {
    keyword: string
    category: SelectOption[] | []
    state: SelectOption[] | []
    zipcode: string
    mile: string
}