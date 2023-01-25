import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flexbox;
    font-size: 2rem;
    flex-direction: column;
    flex-wrap: wrap;
    height: 23rem;
    width: 28rem;
    justify-content: center;

    img {
        width: 15rem;
        height: 15rem;
        margin-right: 15rem;
    }
    h1#main {
        text-align: center;
    }

    h1#temp {
        position: relative;
        bottom: 13rem;
        left: 11.5rem;
        text-align: center;
    }

    h2 {
        position: relative;
        right: 6rem;
        bottom: 5rem;
    }

    h6 {
        position: relative;
        bottom: 6rem;
        width: 25rem;
        text-align: center;
    }
`;
