import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllAuthors from '../components/AllAuthors';
import CreateAuthor from '../components/CreateAuthor';
import UpdateAuthor from '../components/UpdateAuthor';
import { Route, Routes, Switch, Link} from 'react-router-dom';



const Main = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    const addAuthor = (newAuthor) => {
        setAllAuthors([...allAuthors, newAuthor])
    }



    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="author/create">Add Author</Link>
            <Routes>
                <Route path="/authors" element={<AllAuthors/>}/>
                <Route path="/author/create" element={<CreateAuthor/>} />
                <Route path="/author/edit/:id" element={<UpdateAuthor/>} />

            </Routes>
        </div>
    )
}

export default Main;