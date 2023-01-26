import styled from 'styled-components';

export const BaseAppFrame = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-image: url(${(props) => props.bg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    width: 100vw;
    height: 100vh;
    transition: 500ms linear;
`;
