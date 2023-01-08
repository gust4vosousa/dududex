import { Button, TextField } from '@mui/material';
import React from 'react';
import { theme } from '../../theme/theme';
import { SearchComponentContainer } from './SearchComponent.styles';
import { ISearchProps } from './SearchComponent.types';

export const SearchComponent: React.FC<ISearchProps> = ({
  label,
  value,
  placeholder,
  fullWidth,
  onChange,
  onSubmit
}) => {
  return (
    <SearchComponentContainer>
      <TextField
        fullWidth={fullWidth}
        variant='standard'
        placeholder={placeholder}
        label={label}
        value={value}
        inputProps={{
          style: {
            color: `${theme.palette.text.white}`
          }
        }}
        InputLabelProps={{
          style: {
            color: `${theme.palette.text.white}`
          }
        }}
        onKeyUp={(event) => {
          if (onSubmit !== undefined && event.key === 'Enter') {
            onSubmit();
          }
        }}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button variant='contained' onClick={onSubmit}>
        Buscar
      </Button>
    </SearchComponentContainer>
  );
};
