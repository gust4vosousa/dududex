import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)({
  minWidth: 200,

  '& .MuiAutocomplete-inputRoot': {
    color: 'white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
    borderRadius: 8
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
    borderRadius: 8
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
    borderRadius: 8
  },
  '& .MuiInputLabel-outlined': {
    color: 'white'
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: 'white'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  }
});
