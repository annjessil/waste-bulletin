import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate();

    return(
        <div className={"default-welcome"}>
              <h1 className="static-default">Welcome to UCLA Zero Waste Bulletin</h1>
              <h2>Learn More About Sustainable Initiatives at UCLA and Beyond</h2>
              <button onClick={() => navigate('/search')} className="login-button">
                Click Here to Learn How To Sort Your Trash!
              </button>
          </div>
    )
}

export default Home;
