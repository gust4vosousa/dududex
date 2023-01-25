export interface ISelectPokemonProps {
  value?: string;
  options: string[];
  label?: string;
  loading: boolean;
  onChange: (value: string) => void;
}
