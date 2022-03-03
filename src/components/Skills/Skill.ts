import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.medium};
    font-family: 'Lato';
    padding: 100px 0 100px 0;

    @media (max-width: 800px){
        &{
            padding: 30px 0 70px 0;
            flex-direction: column;
        }
    }
`;

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 70%;
    height: 20%;
    padding: 80px;
    margin-top: -120px;
    
    h2{
        font-size: 40px;
        color: ${({theme}) => theme.primary};
    }

    p{
        font-size: 30px;
        line-height: 1.25;
        margin-top: -10px;
        color: ${({theme}) => theme.font};
    }

    @media (max-width: 900px){
        width: 60%;
        margin-top: -80px;

        p{
            font-size: 18px;
            line-height: 1;
            text-align: center;
        }

        h2{
            text-align: center;
        }
    }
    @media (max-width: 400px){
        p{
            font-size: 13px;
        }
        h2{
            font-size: 30px;
        }
    }
    @media (max-height: 600px){
        margin-top: -150px;
        p{
            font-size: 16px;
            margin-bottom: -30px;
        }
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 80%;

    @media (max-width: 800px){
        width: 95%;
    }
    @media (max-height: 600px){
        margin-top: 20px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
    align-items: center;
    padding-bottom: 35px;

    @media (max-width: 800px){
        padding-bottom: 15px;
    }
`;

const Item = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 33%;
    background-color: ${({theme}) => theme.dark};
    border-radius: 10px;
    margin: 15px;
    padding: 10px;
    justify-content: center;

    p{
        text-align: center;
    }

    h4{
        color: #FF0E48;
        margin-top: -6px;
        text-align: center;
        font-size: 18px;
    }

    .Icon{
        color: #FF0E48;
        font-size: 80px;
    }

    @media (max-width: 900px){
        padding: 5px;
        margin: 7px;
        height: 90%;

        h4{
            font-size: 15px;
        }
    
        .Icon{
            font-size: 55px;
        }
    }
    @media (max-width: 400px){
        padding-bottom: 10px;
        h4{
            font-size: 12px;
        }
    
        .Icon{
            font-size: 40px;
        }
    }
    @media (max-height: 600px){
        padding-bottom: 10px;
        h4{
            font-size: 13px;
        }
    
        .Icon{
            font-size: 45px;
        }
    }
`;

const Components = {
    Container,
    ContainerInfo,
    Column,
    Row,
    Item
};

export default Components;