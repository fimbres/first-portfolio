import styled from 'styled-components';

const Container = styled.form`
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 450px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    background-color: ${({theme}) => theme.medium};
    border-radius: 15px;
    align-items: center;

    h4{
        margin-top: -10px;
        font-size: 20px;
        color: ${({theme}) => theme.font};
    }

    @media (max-width: 600px){
        h4{
            font-size: 17px;
        }
    }

    @media (max-width: 400px){
        h4{
            font-size: 16px;
        }
    }
    @media (max-height: 600px){
        h4{
            font-size: 14px;
        }
    }
`;

const Button = styled.button`
    cursor: pointer;
    background-color: ${({theme}) => theme.primary};
    font-size: 14px;
    border-radius: 4px;
    color: #fafafa;
    width: 80%;
    font-weight: bold;
    border: none;
    height: 45px;
    transition: 0.3s all ease;
    margin-top: 10px;

    &:hover{
        background-color: #fafafa;
        border: 3px solid ${({theme}) => theme.primary};
        color: ${({theme}) => theme.primary};
    }

    @media (max-width: 400px){
        height: 40px;
    }
    @media (max-height: 600px){
        height: 35px;
    }
`;

const Input = styled.input`
    width: 78%;
    height: 30px;
    border: none;
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.dark};
    border-radius: 5px;
    padding: 7px;
    color: ${({theme}) => theme.font};

    @media (max-width: 600px){
        height: 23px;
    }
    @media (max-width: 400px){
        height: 20px;
    }
    @media (max-height: 600px){
        height: 18px;
    }
`;

const Errors = styled.p`
    margin: -7px 5px 5px 5px;
    font-size: 15px;
    font-weight: bold;
    color: red;
    @media (max-width: 600px){
        font-size: 12px;
    }
    @media (max-width: 400px){
        font-size: 12px;
    }
    @media (max-height: 600px){
        font-size: 10px;
    }
`;

const Info = styled.p`
margin: -7px 5px 5px 5px;
    font-size: 15px;
    font-weight: bold;
    color: ${({theme}) => theme.font};
    @media (max-width: 400px){
        font-size: 12px;
    }
    @media (max-height: 600px){
        font-size: 10px;
    }
`;

const Success = styled.p`
    margin: -7px 5px 5px 5px;
    font-size: 15px;
    font-weight: bold;
    color: green;
    @media (max-width: 400px){
        font-size: 12px;
    }
    @media (max-height: 600px){
        font-size: 10px;
    }
`;

const Components = {
    Container,
    Button,
    Input,
    Success,
    Info,
    Errors
};

export default Components;