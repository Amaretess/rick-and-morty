import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate()

    const click = () => {
        navigate("/")
    }


    return (
        <List>
            <Image onClick={click} src="https://i.pinimg.com/736x/d9/f2/1d/d9f21da38ae59658eb2715221d3e35ea.jpg"/>
            
            <Link to="/more-characters" className="Link">
                <li>More Characters</li>
            </Link>
            <Link to="/about" className="Link" >
                <li>About</li>
            </Link>
            <Link to="/docs" className="Link">
                <li>Docs</li>
            </Link>
            
        </List>
    );
}

export default NavBar;



const List = styled.ul `
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background-color: white;
`

const Image = styled.img `
    width: 6rem;
    border-radius: 3rem;
`


