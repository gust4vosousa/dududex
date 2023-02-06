import { Fragment } from 'react';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { IScreenProps } from './ScreenProvider.types';

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Fragment>
  );
};
