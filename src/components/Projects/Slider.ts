import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>theme.light};
    display: flex;
    flex-direction: row;
    padding; 100px 0 100px 0;
    font-family: 'Lato';
    transition: 0.2s all ease-in;
    margin-bottom: 100vh;

    @media (max-width: 1270px){
        flex-direction: column;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 30%;
    padding: 50px;
    justify-content: center;

    h3{
        font-size: 40px;
        font-weight: bold;
        color: #FF0E48;
    }
    p{
        width: 80%;
        font-size: 30px;
        color: ${({theme}) => theme.font}
    }

    @media (max-width: 1270px){
        height: 30%;
        width: 60%;
        align-self: center;
        h3{
            margin-top: -30px;
            text-align: center;
        }
        p{
            margin-top: 0;
            font-size: 18px;
            text-align: center;
            width: 100%;
        }
    }
    @media (max-width: 400px){
        height: 25%;
        margin-bottom: 10px;
        h3{
            font-size: 30px;
        }
        p{
            margin-top: -10px;
            font-size: 15px;
        }
    }
    @media (max-height: 600px){
        height: 25%;
        p{
            margin-top: -10px;
            font-size: 18px;
        }
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    height: 60%;
    width: 70%;
    vertical-align: center;
    justify-content: center;
    margin-top: 200px;
    transition: 0.2s all ease-in;
    margin-right: 10px;

    
    @media (max-width: 1500px){
        width: 55%;
    }
    @media (max-width: 1270px){
        margin-top: -40px;
        width: 95%;
        align-self: center;
    }
    @media (max-width: 1050px){
        width: 90%;
    }
    @media (max-width: 780px){
        width: 60%;
        margin: -90px 20px 20px 20px;
        align-self: center;
    }
    @media (max-width: 650px){
        width: 80%;
    }
    @media (max-width: 500px){
        width: 84%;
        margin: -90px 20px 20px 20px;
        align-self: center;
    }
    @media (max-height: 600px){
        width: 70%;
        height: 70%;
        margin: -70px 20px 20px 20px;
    }
`;

const SlideContainer = styled.div`
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin: 0 10px 0 10px;
    border-radius: 10px;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
        transition: all 0.2s ease-in-out;
    }

    img:hover{
        transform: scale(1.05);
        opacity: 0.8;
    }
`;

const SlideDescription = styled.div`
    background-color: #000;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    widht: 100%;
    opacity: 0.8;
    transition: 0.2s all ease-in;

    span{
        color: #fff;
        display: block;
        font-size: 20px;
        padding: 20px;
    }
`;

const Components = {
    Container,
    Title,
    SlideContainer,
    SlideDescription,
    CarouselContainer,
};

export default Components;