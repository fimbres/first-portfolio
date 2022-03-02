import styled from "styled-components";

const ContainerFooter = styled.footer`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.dark};
    padding-top: 100px;
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
`;

const InfoContainer = styled.div`
    width 80%;
    align-self: center;
    margin-top: 70px;
    height: 20%;

    p{
        font-size: 20px;
        margin-top: -20px;
        color: ${({theme}) => theme.font};
    }

    h3{
        font-size: 40px;
        color: ${({theme}) => theme.primary};
    }
`;

const ContactContainer = styled.div`
    margin: 0 auto;
    padding: 100px 0 100px 0px;
    margin-bottom: 20px;
    width: 70%;
    height: 60%;
    justify-content: center;
`;

const LinksContainer = styled.div`
    display: flex;
    margin: 15px;

    a{
        margin: 3px;
        text-decoration: none;
        transition: all 0.2s ease-out;
        color: ${({theme}) => theme.font};
    }

    a:hover{
        color: ${({theme}) => theme.primary};
    }
`;

const ContainerInferior = styled.div`
    height: 20%;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({theme}) => theme.medium};
    display: flex;
    flex-direction: column;

    p{
        color: ${({theme}) => theme.font};
        text-align: center;
        font-size: 23px;
    }
`;

const ContainerAux = styled.div`
    display: flex:
    width: 100%;
    justify-content: space-between;
    flex: 2;
`;

const CopyRight = styled.div`
    display: flex;
    margin: 20px;
    font-size: 15px;
    font-weight: bold;
    color: ${({theme}) => theme.font};
    transition: all 0.2s ease-out;

    &:hover{
        color: ${({theme}) => theme.primary};
    }
`;

const Components = {
    ContactContainer,
    ContainerFooter,
    InfoContainer,
    LinksContainer,
    ContainerInferior,
    CopyRight,
    ContainerAux
};

export default Components;