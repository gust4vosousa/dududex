import {
  blue,
  blueGrey,
  deepOrange,
  green,
  lightGreen,
  orange,
  red,
  teal,
  yellow
} from '@mui/material/colors';

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
  },
  stats: {
    terrible: red['A700'],
    low: deepOrange['A700'],
    average: orange['A700'],
    good: yellow['A700'],
    high: lightGreen['A700'],
    excellent: green['A700'],
    legendary: teal['A700']
  },
  types: {
    bug: '#A6B91A',
    dark: '#705746',
    dragon: '#6F35FC',
    electric: '#F7D02C',
    fairy: '#D685AD',
    fighting: '#C22E28',
    fire: '#EE8130',
    flying: '#A98FF3',
    ghost: '#735797',
    grass: '#7AC74C',
    ground: '#E2BF65',
    ice: '#96D9D6',
    normal: '#A8A77A',
    poison: '#A33EA1',
    psychic: '#F95587',
    rock: '#B6A136',
    steel: '#B7B7CE',
    water: '#6390F0'
  }
};
