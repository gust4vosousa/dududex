import { blue, blueGrey } from '@mui/material/colors';
import { EType } from '../@types/TypeEntity.types';

export const colors = {
  primary: {
    dark: blue[900],
    light: '',
    main: blue[300]
  },
  secondary: {
    dark: '',
    light: '',
    main: ''
  },
  background: {
    dark: blueGrey[900],
    light: blueGrey[400],
    main: blueGrey[700]
  }
};

export const getTypeColor = (type: EType) => {
  const color = {
    [EType.bug]: '#A6B91A',
    [EType.dark]: '#705746',
    [EType.dragon]: '#6F35FC',
    [EType.electric]: '#F7D02C',
    [EType.fairy]: '#D685AD',
    [EType.fighting]: '#C22E28',
    [EType.fire]: '#EE8130',
    [EType.flying]: '#A98FF3',
    [EType.ghost]: '#735797',
    [EType.grass]: '#7AC74C',
    [EType.ground]: '#E2BF65',
    [EType.ice]: '#96D9D6',
    [EType.normal]: '#A8A77A',
    [EType.poison]: '#A33EA1',
    [EType.psychic]: '#F95587',
    [EType.rock]: '#B6A136',
    [EType.steel]: '#B7B7CE',
    [EType.water]: '#6390F0'
  };

  return color[type];
};
