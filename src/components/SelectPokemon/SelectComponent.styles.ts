import { Autocomplete, Box, styled } from '@mui/material';

export const SelectContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const StyledAutocomplete = styled(Autocomplete)({
  minWidth: 300,
  '& .MuiAutocomplete-inputRoot': {
    color: 'white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },
  '& .MuiInputLabel-outlined': {
    color: 'white'
  },
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },
  '& .Mui-focused .MuiInputLabel-outlined': {
    color: 'white'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  }
});
