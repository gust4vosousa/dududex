import { Box } from '@material-ui/core';
import {
  HomepageLink,
  MessageContainer,
  NotFoundComponent
} from './NotFoundScreen.styles';

export const NotFoundScreen: React.FC = () => {
  return (
    <NotFoundComponent>
      <MessageContainer>
        <Box>{'Error 404'}</Box>
        <Box>{'Page not found :('}</Box>
      </MessageContainer>
      <HomepageLink to='/'>Return to Homepage</HomepageLink>
    </NotFoundComponent>
  );
};
