import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const CityInput = styled.input`
    border-radius: 0.5rem;
    background: ${baseTheme.colors.buttonsAndInput};
    border: none;
    margin: ${baseTheme.cityInput.margin};
    height: ${baseTheme.cityInput.height};
    width: ${baseTheme.cityInput.width};
    padding-left: ${baseTheme.cityInput.paddingLleft};
`;

export const SearchButton = styled.button`
    background-color: inherit;
    border: none;
    margin: ${baseTheme.citySearchButton.margin};
    cursor: pointer;
    img {
        width: ${baseTheme.citySearchButton.imgSize};
        height: ${baseTheme.citySearchButton.imgSize};
        background-color: inherit;
    }
`;
export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
`;
