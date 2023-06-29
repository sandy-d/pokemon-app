import React, { useState, useEffect } from 'react';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Load bookmarks from local storage on component mount
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }
  }, []);

  const handleRemoveBookmark = (pokemonName) => {
    // Remove a bookmarked Pokemon from the list
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.name !== pokemonName);
    setBookmarks(updatedBookmarks);
    // Update local storage with the updated bookmarks list
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <div key={bookmark.name}>
            <h3>{bookmark.name}</h3>
            <button onClick={() => handleRemoveBookmark(bookmark.name)}>Remove Bookmark</button>
            {/* Display other details */}
          </div>
        ))
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
}

export default Bookmarks;
