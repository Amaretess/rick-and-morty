import styled from "styled-components";
import NavBar from "../components/NavBar";

const Docs = () => {
    return (
        <>
        <NavBar />
        <Title>Docs</Title>
        </>
    );
}

export default Docs;

const Title = styled.h1 `
    display: flex;
    justify-content: center;
`