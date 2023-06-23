import axios from 'axios'
import { useEffect } from 'react'
import Categories from './categories'
import './sidebar.css'
import Authors from './authors'


export const Sidebar = () => {

    return(
        <>
            <div className='sidebar'>
            <Categories />
            <Authors />
            </div>
        </>
    )
}

