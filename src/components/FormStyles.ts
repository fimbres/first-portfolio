import styled from 'styled-components';

const Container = styled.form`
    width: 100%;
    height: 100%;
    max-width: 700px;
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
`;

const InputArea = styled.textarea`
    width: 78%;
    height: 60px;
    border: none;
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.dark};
    border-radius: 5px;
    padding: 7px;
    resize: none;
    color: ${({theme}) => theme.font};
`;

const Errors = styled.p`
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
    color: red;
`;

const Info = styled.p`
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
    color: ${({theme}) => theme.font};
`;

const Success = styled.p`
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
    color: green;
`;

const Components = {
    Container,
    Button,
    Input,
    InputArea,
    Success,
    Info,
    Errors
};

export default Components;