import styled from 'styled-components';

export const AuthButton = styled.button`
    background-color: inherit;
    border: 0px;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    img {
        width: 2rem;
        height: 2rem;
        background-color: inherit;
    }
    &:hover::after {
        content: attr(data-title);
    }
`;
