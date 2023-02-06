import { FooterContainer } from './FooterComponent.styles';

export const FooterComponent: React.FC = () => (
  <FooterContainer>
    {`v${process.env.REACT_APP_VERSION} - App Developed by Gustavo Anjos`}
  </FooterContainer>
);
