import { useState } from 'react'; 
import DetailsResult from './DetailsResult';

const Search = () => {


    const [data, setData] = useState({
        search: ""
    })

    const [character, setCharacter] = useState();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const getApi = async (id) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const dataResponse = await response.json();
        setCharacter(dataResponse)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getApi(data.search)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="search" name="search" value={data.search} onChange={handleChange}/>
                <input type="submit" />
            </form>

            <DetailsResult character={character}/>
        </>
    );
}

export default Search;