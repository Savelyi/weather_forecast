import styled from 'styled-components';
import sunnyImage from '../../assets/sunny.jpg';

export const BaseAppFrame = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${sunnyImage});
    background-repeat: no-repeat;
    background-size: cover;
    align-items:center;
    width: 100vw;
    height: 100vh;
`;
