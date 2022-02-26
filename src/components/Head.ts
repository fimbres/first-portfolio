import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin: 0;
    justify-content: center;
    background-color: ${({theme}) => theme.dark};
    transition: 0.2s all ease-in;
`;

const HeadContainer = styled.div`
    width: 100%;
    height: 50%;
    justify-content: center;
    padding: 10px;
    font-family: 'Lato';
    color: ${({theme}) => theme.font};
    font-size: 40px;
`;

const SwitchHandler = styled.div`
    width: 100%;
    max-width: 75px;
    margin: auto;
    margin-right: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`;

const Switch = styled.div`
    position: relative;
    width: 90px;
    height: 40px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.toggle};
    transition: 1s all ease-in;
`;

interface Props{
    switched: boolean;
}

const ButtonSwitch = styled.button<Props>`
    position: absolute;
    cursor: pointer;
    bottom: 5px;
    left: ${({switched}) => (switched ? "40px" : "5px")};
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: ${({theme}) => theme.medium};
    transition: 0.3s all ease-in;
    outline: none;
`;

const ScrollContainer = styled.div`
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
        width: 10px;
        height: 500px;
    }
    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.medium};
      }
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.toggle};
        border-radius: 20px;
        border: 3px solid ${({theme}) => theme.medium};
      }
`;

const components = {
    HeadContainer,
    Body,
    ScrollContainer,
    Switch,
    ButtonSwitch,
    SwitchHandler,
}

export default components;