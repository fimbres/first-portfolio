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

    @media (max-width: 800px){
        &{
            padding: 30px 0 70px 0;
            flex-direction: column;
        }
    }
`;

const Texto = styled.h2`
    display: none;

    @media (max-width: 800px){
        display: flex;
        font-size: 40px;
        color: ${({theme}) => theme.primary};
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

    @media (max-width: 800px){
        &{
            width: 80%;
            height: 40%;
            padding: 0;
            margin-top: 70px;

            h2{
                display: none;
            }

            p{
                font-size: 20px;
                line-height: 1.25;
                color: ${({theme}) => theme.font};
            }
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

    @media (max-width: 800px){
        &{
            width: 28%;
            align-self: center;
            padding: 0;

            img{
                height: 100%;
                width: 100%;
            }
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

    @media (max-width: 800px){
        &{
            width: 100%;
            margin-top: 10px;
        }
    }
`;

const ButtonsContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 800px){
        &{
            flex-direction: column;
            padding: 20px;
            margin-bottom: 20px;
        }
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