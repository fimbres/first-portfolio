import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 70vh;
    background-color: ${({theme}) => theme.dark};
    font-family: 'Lato';
    padding: 100px 0 100px 0;

    @media (max-width: 900px){
        &{
            padding: 30px 0 70px 0;
            flex-direction: column;
        }
    }
`;

const Texto = styled.h2`
    display: none;
    color: ${({theme}) => theme.primary};

    @media (max-width: 900px){
        display: flex;
        font-size: 40px;
    }
    @media (max-width: 900px){
        display: flex;
        font-size: 30px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    padding: 0 70px 0 10px;
    transition: 0.3s all ease;

    h2{ 
        font-size: 40px;
        color: ${({theme}) => theme.primary};
    }

    p{
        font-size: 30px;
        line-height: 1.5;
        color: ${({theme}) => theme.font};
    }

    @media (max-width: 900px){
        width: 80%;
        height: 40%;
        padding: 0;
        margin-top: 90px;

        h2{
            display: none;
        }

        p{
            font-size: 20px;
            line-height: 1.25;
        }
    }

    @media (max-width: 600px){
        width: 80%;
        margin-top: 60px;
        h2{
            display: none;
        }
        p{
            font-size: 16px;
            line-height: 1.20;
        }
    }

    @media (max-width: 400px){
        width: 80%;
        margin-top: 40px;
        p{
            font-size: 14px;
        }
    }

    @media (max-height: 600px){
        p{
            font-size: 22px;
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    width: 45%;
    overflow: hidden;
    padding-left: 70px;

    img{
        height: 80%;
        width: 80%;
        border-radius: 50%;
    }

    @media (max-width: 900px){
        width: 25%;
        align-self: center;
        padding: 0;
        margin-bottom: 5px;

        img{
            height: 100%;
            width: 100%;
        }
    }

    @media (max-width: 400px){
        align-self: center;
        width: 130px;

        img{
            height: 100%;
            width: 100%;
        }
    }
`;

const Button = styled.button`
    cursor: pointer;
    background-color: ${({theme}) => theme.primary};
    font-size: 14px;
    border-radius: 4px;
    color: #fafafa;
    width: 45%;
    margin-left: 10px;
    font-weight: bold;
    border: none;
    height: 45px;
    transition: 0.3s all ease;

    &:hover{
        background-color: #fafafa;
        border: 3px solid ${({theme}) => theme.primary};
        color: ${({theme}) => theme.primary};
    }

    @media (max-width: 900px){
        width: 100%;
        margin-top: 10px;
    }

    @media (max-width: 400px){
        height: 30px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    @media (max-width: 900px){
        flex-direction: column;
        padding: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 400px){
        padding: 5px;
        margin-top: 5px;
    }
`;

const components = {
    Container,
    InfoContainer,
    ImageContainer,
    Button,
    ButtonsContainer,
    Texto,
}

export default components;