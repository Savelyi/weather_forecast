import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Button = styled.button`
    border-radius: 0.5rem;
    background: ${baseTheme.colors.buttonsAndInput};
    cursor: pointer;
    border: none;
    margin: ${baseTheme.serviceButtons.margin};
    height: ${baseTheme.serviceButtons.height};
    width: ${baseTheme.serviceButtons.width};
`;
