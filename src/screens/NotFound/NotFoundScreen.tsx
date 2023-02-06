import { Box } from '@material-ui/core';
import { ScreenProvider } from '../../providers/Screen/ScreenProvider';
import {
  HomepageLink,
  MessageContainer,
  NotFoundComponent
} from './NotFoundScreen.styles';

export const NotFoundScreen: React.FC = () => {
  return (
    <ScreenProvider>
      <NotFoundComponent>
        <MessageContainer>
          <Box>{'Error 404'}</Box>
          <Box>{'Page not found :('}</Box>
        </MessageContainer>
        <HomepageLink to='/'>Return to Homepage</HomepageLink>
      </NotFoundComponent>
    </ScreenProvider>
  );
};
