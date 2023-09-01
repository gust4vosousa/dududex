export interface ISelectProps {
  options: ISelectOption[]
  label?: string
  loading: boolean
  onChange: (value: ISelectOption | null) => void
  currentSearch: ISelectOption | null
}

export interface ISelectOption {
  id: number
  label: string
}
