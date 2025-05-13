import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate();

    return(
        <div className="home-background">
            <h1>Home</h1>
        </div>
    )
}

export default Home;
