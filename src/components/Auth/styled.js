import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const AuthButton = styled.button`
    background-color: inherit;
    border: 0px;
    cursor: pointer;
    width: ${baseTheme.authButton.buttonSize};
    height: ${baseTheme.authButton.buttonSize};
    img {
        width: ${baseTheme.authButton.imgSize};
        height: ${baseTheme.authButton.imgSize};
        background-color: inherit;
    }
    &:hover::after {
        content: attr(data-title);
    }
`;
