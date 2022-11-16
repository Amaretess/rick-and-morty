import styled from "styled-components";
import NavBar from "../components/NavBar";


const About = () => {
    return (
        <>
        <NavBar />
        <Title>About</Title>

        </>
    );
}

export default About;

const Title = styled.h1 `
    display: flex;
    justify-content: center;
`