import styled from "styled-components";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { backURL } from "../../backURL";
import axios from "axios";

export default function HomePage(){
    const [cities, setCities] = useState([]);

    useEffect(() =>{
        const get = axios.get(`${backURL}/cities`);

        get.then(final => {
            setCities(final.data);
            console.log(cities);
        });

        get.catch(error =>{
            alert('Reload');
        });
    })

    return(
        <Container>
            <Header />
            <Body>
                <Title  initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Bem-Vindos a Viajex, a sua agência de viagens</Title>
                <Button>Selecione a cidade</Button>
                <ContainExplain>
                    <Explain></Explain>
                    <Explain></Explain>
                    <Explain></Explain>
                </ContainExplain>
            </Body>
        </Container>
    )
}

const Button = styled.button`
    width: 75%;
    height: 35px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #FFFFFF;
`;

const ContainExplain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
`;

const Explain = styled.div`
    width: 300px;
    height: 470px;
    background-color: black;
    border-radius: 16px;
`;

const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #F2F2F2;
`;

const Body = styled.div`
    width: 80%;
    height: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
`;

const Title = styled(motion.h1)`
    width: 100%;
    padding-bottom: 50px;
    padding-top: 35px;
    font-size: 45px;
    font-weight: 700;
    color: #6D24F9;
    font-family: 'Raleway';
`;
