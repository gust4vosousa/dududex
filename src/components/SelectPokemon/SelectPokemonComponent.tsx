import { TextField } from '@mui/material';
import { StyledAutocomplete } from './SelectComponent.styles';
import { ISelectPokemonProps } from './SelectPokemonComponent.types';

export const SelectComponent: React.FC<ISelectPokemonProps> = ({
  value,
  options,
  label,
  loading,
  onChange
}) => {
  return (
    <StyledAutocomplete
      value={value}
      onChange={(_event, newValue) => onChange(newValue as string)}
      options={options}
      renderInput={(params) => <TextField label={label} {...params} />}
      loading={loading}
      disabled={loading}
    />
  );
};
