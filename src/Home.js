// Home.js
import React from 'react';
import {useNavigate} from "react-router-dom";
import './Style.css';

function Home() {

    const navigate = useNavigate();
    function handleClick() {
        navigate('/search');
      }
    function handleClick_Listing() {
        navigate('/listing');
    }
    function handleClick_Details() {
        navigate('/listingpage');
    }
    function handleClick_Bookmarks() {
        navigate('/bookmarks');
    }

  return (
    <>

    <h1>Home Page</h1>
    <button
      className='Get_Started'
          type="button"
          style={{marginBottom: '20px'}}
          onClick={handleClick}
        >Search Page</button>
        <div>
        <button
          className='Get_Started'
          type="button"
          style={{marginBottom: '20px'}}
          onClick={handleClick_Listing}
        >Listing page</button>
        </div>
        <div>
        <button
          className='Get_Started'
          type="button"
          style={{marginBottom: '20px'}}
          onClick={handleClick_Details}
        >Details Page</button>
        </div>
        <div>
        <button
          className='Get_Started'
          type="button"
          style={{marginBottom: '20px'}}
          onClick={handleClick_Bookmarks}
        >Bookmarks Screen</button>
        </div>
        
    </>
    
    );
  
}

export default Home;
