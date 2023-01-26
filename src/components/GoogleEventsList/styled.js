import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
    position: relative;
    margin-left: ${baseTheme.googleEvents.marginLeft};
    align-self: flex-start;
    top: ${baseTheme.googleEvents.top};
    font-size: ${baseTheme.googleEvents.fontSize};
`;
