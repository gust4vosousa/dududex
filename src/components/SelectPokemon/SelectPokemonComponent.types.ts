export interface ISelectProps {
  currentSearch: ISelectOption | null
  label?: string
  loading: boolean
  onChange: (value: ISelectOption | null) => void
  options: ISelectOption[]
}

export interface ISelectOption {
  id: number
  label: string
}
