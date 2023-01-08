export interface ISearchProps {
  label?: string;
  placeholder?: string;
  value: string;
  fullWidth?: boolean;
  onSubmit: () => void;
  onChange: (value: string) => void;
}
