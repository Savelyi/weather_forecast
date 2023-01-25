import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    color: black;
    img {
        width: 5rem;
        height: 5rem;
    }

    li {
        display: inline-flex;
        width: 15rem;
        border: 0.5rem solid #211f1fad;
        margin: 1rem;
        flex-wrap: nowrap;
        justify-content: center;
    }

    h1 {
        text-align: center;
    }
`;
