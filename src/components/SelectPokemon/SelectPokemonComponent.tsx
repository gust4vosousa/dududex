import SearchIcon from '@mui/icons-material/Search';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { useCallback } from 'react';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { SelectContainer, StyledAutocomplete } from './SelectComponent.styles';
import { ISelectPokemonProps } from './SelectPokemonComponent.types';

export const SelectComponent: React.FC<ISelectPokemonProps> = ({
  options,
  label,
  loading,
  onChange
}) => {
  const renderCustomInput = useCallback(
    (params: AutocompleteRenderInputParams): JSX.Element => {
      const customParams = {
        ...params,
        InputProps: { ...params.InputProps, startAdornment: <SearchIcon /> }
      };

      return <TextField {...customParams} label={label} placeholder={label} />;
    },
    [label]
  );

  return (
    <SelectContainer>
      <StyledAutocomplete
        onChange={(_event, newValue: any) => onChange(newValue.id as number)}
        options={options}
        getOptionLabel={(option: any) =>
          `#${option.id} ${firstLetterUpperCaseUtil(option.label)}`
        }
        loading={loading}
        disabled={loading}
        renderInput={(params) => renderCustomInput(params)}
      />
    </SelectContainer>
  );
};
