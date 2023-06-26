import axios from 'axios'
import { useEffect, useState } from 'react';

const Authors = () => {
    const [Authors, setAuthors] = useState([])
    const FetchAuthors = async () => {
        try {
            const response = await axios.get('http://localhost:8081/authors');
            setAuthors(response.data) ;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        FetchAuthors() 
    }, [])
    

    return (
        <>
        <h2>Authors</h2>
    <ul class="sidebar-menu">
        {
            Authors && Authors.map((Author, index) => {
                return(
                    <li key={index}>{Author.author_name}</li>
                )
            })
        }
        </ul>
        </>
    )
}

export default Authors
