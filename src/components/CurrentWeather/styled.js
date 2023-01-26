import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const Wrapper = styled.div`
    display: flexbox;
    font-size: ${baseTheme.currentWeatherWrapper.fontSize};
    flex-direction: column;
    flex-wrap: wrap;
    height: ${baseTheme.currentWeatherWrapper.height};
    width: ${baseTheme.currentWeatherWrapper.width};
    justify-content: center;

    img {
        width: ${baseTheme.currentWeatherWrapper.imgSize};
        height: ${baseTheme.currentWeatherWrapper.imgSize};
        margin-right: ${baseTheme.currentWeatherWrapper.imgMarginRight};
    }
    h1#main {
        text-align: center;
    }

    h1#temp {
        position: relative;
        bottom: ${baseTheme.currentWeatherWrapper.h1Temp.bottom};
        left: ${baseTheme.currentWeatherWrapper.h1Temp.left};
        text-align: center;
    }

    h2 {
        position: relative;
        right: ${baseTheme.currentWeatherWrapper.h2.right};
        bottom: ${baseTheme.currentWeatherWrapper.h2.bottom};
    }

    h6 {
        position: relative;
        bottom: ${baseTheme.currentWeatherWrapper.h6.bottom};
        width: ${baseTheme.currentWeatherWrapper.h6.width};
        text-align: center;
    }
`;
