import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Listing from './Listing';
import ListingPage from './ListingPage';
import Bookmarks from './Bookmarks';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listingpage" element={<ListingPage />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details/:pokemonName" component={Details} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;


    


