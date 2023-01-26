import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const HeaderWrapper = styled.div`
    display: flexbox;
    flex-direction: row;
    background-color: ${baseTheme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    width: inherit;
    min-height: ${baseTheme.header.height};
`;
