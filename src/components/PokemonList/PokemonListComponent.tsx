import { List, ListItemButton, Typography } from '@mui/material';
import { Fragment } from 'react';
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils';
import { ListContainer } from './PokemonListComponent.styles';
import { IPokemonListProps } from './PokemonListComponent.types';

export const PokemonListComponent: React.FC<IPokemonListProps> = ({
  list,
  onClick
}) => {
  return (
    <ListContainer>
      <List>
        {list.map((name, index) => (
          <Fragment key={index}>
            <ListItemButton onClick={() => onClick(name)}>
              {/* <ListCard> */}
              <Typography>{`#${index + 1}`}</Typography>
              <Typography>{firstLetterUpperCaseUtil(name)}</Typography>
              {/* </ListCard> */}
            </ListItemButton>
          </Fragment>
        ))}
      </List>
    </ListContainer>
  );
};
