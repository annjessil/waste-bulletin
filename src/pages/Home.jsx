import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <h1>Welcome to UCLA Waste Bulletin</h1>
            <button onClick={ () => navigate('/bulletin')}>Click Here for waste bulletin</button>
        </div>
    )
}

export default Home;
