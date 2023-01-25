import { Autocomplete } from '@mui/material';
import { styled } from '../../theme/theme';

export const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-inputRoot': {
    color: 'white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
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
