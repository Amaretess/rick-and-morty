import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
const Home = () => {

    const [characters, setCharacters] = useState();

    useEffect(() => {
        const getApi = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            const mainCharacters = await data.results.slice(0,5);
            setCharacters(mainCharacters);
        }
        getApi();
    }, [])


    return (
        <Container>
        <NavBar />
        <Title>Welcome to the Rick and Morty API</Title>
        {characters?.map((character) => {
            return (
                <Card character={character} />
            )
        })}
        </Container>
    );
}

export default Home;

const Container = styled.div `
    background-color: #212529;
`

const Title = styled.h1 `
    display: flex;
    justify-content: center;
    color: white;
`

