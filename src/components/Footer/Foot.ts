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
    height: 15%;

    p{
        font-size: 20px;
        margin-top: -20px;
        transition: all 0.2s ease-out;
        color: ${({theme}) => theme.font};
    }

    h3{
        font-size: 40px;
        transition: all 0.2s ease-out;
        color: ${({theme}) => theme.primary};
    }

    @media (max-width: 800px){
        p{
            font-size: 18px;
            text-align: center;
        }
    
        h3{
            font-size: 40px;
            text-align: center;
        }
    }
    @media (max-width: 600px){
        
        p{
            font-size: 16px;
        }
        h3{
            font-size: 30px;
        }
    }
    @media (max-width: 400px){
        
        p{
            font-size: 14px;
        }
        h3{
            font-size: 30px;
        }
    }
    @media (max-height: 600px){
        
        p{
            font-size: 16px;
        }
        h3{
            font-size: 30px;
        }
    }
`;

const ContactContainer = styled.div`
    display: flex;
    padding: 80px 0 60px 0px;
    width: 80%;
    height: 70%;
    justify-content: center;
    align-self: center;
    @media (max-width: 600px){
        margin-top: -30px;
        margin-bottom: -30px;
    }
    @media (max-width: 400px){
        margin-top: -20px;
        margin-bottom: -20px;
    }
    @media (max-height: 600px){
        margin-top: -30px;
        margin-bottom: -30px;
    }
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
    height: 15%;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({theme}) => theme.medium};
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;

    p{
        color: ${({theme}) => theme.font};
        text-align: center;
        font-size: 23px;
    }

    @media (max-width: 800px){
        p{
            font-size: 18px;
        }
    }
    @media (max-width: 500px){
        p{
            font-size: 15px;
        }
    }
    @media (max-width: 400px){
        p{
            font-size: 13px;
        }
    }
    @media (max-height: 600px){
        p{
            font-size: 13px;
        }
    }
`;

const ContainerAux = styled.div`
    display: flex:
    width: 100%;
    justify-content: space-between;
`;

const CopyRight = styled.div`
    display: flex;
    margin-top: 25px;
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