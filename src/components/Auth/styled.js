import styled from 'styled-components';

export const AuthButton = styled.button`
    background-color: inherit;
    border: 0px;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    img {
        width: 3rem;
        height: 3rem;
        background-color: inherit;
    }
    &:hover::after {
        content: attr(data-title);
    }
`;
