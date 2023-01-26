import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
    position: relative;
    img {
        width: ${baseTheme.forecastWrapper.imgSize};
        height: ${baseTheme.forecastWrapper.imgSize};
    }

    li {
        display: inline-flex;
        width: ${baseTheme.forecastWrapper.li.width};
        border: ${baseTheme.forecastWrapper.li.border};
        margin: ${baseTheme.forecastWrapper.li.margin};
        flex-wrap: nowrap;
        justify-content: center;
    }

    h1 {
        text-align: center;
    }
`;
