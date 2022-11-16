import NavBar from "./NavBar";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from "styled-components";


const Details = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState();

    useEffect(() => {
        const getApi = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data)
            console.log(data);
        }
        getApi();
    }, [])

    return (
        <>
            <NavBar />
            <Container>
                <span>
                    <Image src={character?.image}/>
                </span>
                <Span>
                    <Name>{character?.name}</Name>
                    <p><Span2>Status:</Span2> {character?.status}</p>
                    <p><Span2>Last known location:</Span2> {character?.location.name}</p>
                    <p><Span2>species:</Span2> {character?.species}</p>
                </Span>
            </Container>
        </>
    );
}

export default Details;


const Container = styled.div`
    border-radius: 2rem;
    margin: 1rem;
    background-color: #495057;
    box-shadow: 5px 3px 3px ;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    justify-content: center;
    align-items: center;


`

const Image = styled.img`
    width: 15rem;
    border-radius: 1rem;
`


const Name = styled.h1`
    color: white;
`

const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    padding: 1rem;
`
const Span2 = styled.span`
    font-weight: bold;
`

