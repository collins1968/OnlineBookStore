import axios from 'axios'
import { useEffect, useState } from 'react';


const Categories = () => {
    const [categories, setcategories] = useState([])
    const FetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8081/categories');
            setcategories(response.data) ;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        FetchCategories() 
    }, [])
    

    return (
        <>
    <ul class="sidebar-menu">
        {
            categories && categories.map((category, index) => {
                return(
                    <li key={index}>{category.category_name}</li>
                )
            })
        }
        </ul>
        </>
    )
}

export default Categories;