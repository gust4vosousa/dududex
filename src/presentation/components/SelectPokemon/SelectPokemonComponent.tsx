import React from 'react'

import { formatPokemonEntryUtil } from '@/application/utils/formatUtils'
import { IconComponent } from '@/presentation/components/Icon/IconComponent'
import { EIcons } from '@/presentation/components/Icon/IconComponent.types'
import { Autocomplete, TextField } from '@mui/material'
import { ISelectProps } from './SelectPokemonComponent.types'

export const SelectComponent: React.FC<ISelectProps> = ({
  label,
  loading,
  onChange,
  options,
  currentSearch,
}) => (
  <Autocomplete
    disabled={loading}
    getOptionLabel={option => formatPokemonEntryUtil(option)}
    loading={loading}
    onChange={(_event, newValue) => onChange(newValue)}
    options={options}
    renderInput={params => (
      <TextField
        {...params}
        InputProps={{
          ...params.InputProps,
          startAdornment: <IconComponent icon={EIcons.SEARCH} />,
        }}
        label={label}
        placeholder={label}
      />
    )}
    value={currentSearch}
  />
)
