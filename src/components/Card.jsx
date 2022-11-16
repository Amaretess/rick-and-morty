import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Card = ({ character }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${character.id}`)
    }


    return (
        <>
        <Container>
            <span>
                <Image onClick={handleClick}src={character?.image}/>
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

export default Card;

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
