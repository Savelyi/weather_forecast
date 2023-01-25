import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-size: ${baseTheme.typography.fontSize};
  font-family: ${baseTheme.typography.fontFamily};
  font-weight: ${baseTheme.typography.fontWeight};
}
`;
