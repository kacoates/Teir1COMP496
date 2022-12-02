import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react';
import FaveArray from '../FaveArray/FaveArray';
import "./Search.css";

//const SearchBar = () => (
//   <div className='search'>
//    <input class="search-input" type="text" placeholder='Search for Movies Here!'/>
//    </div>
    //)
    
    function SearchBar({ placeholder, data }) {

        // State setup
        const [matchingMovies, setMatchingMovies] = useState([]);
        const [input, setInput] = useState("");
      
        const filterSearch = (e) => {
          // Get value from input
          const userInput = e.target.value;

          // Update state
          setInput(userInput);

          // If the text from input matches any part of a movie title, include it
          const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(userInput.toLowerCase());
          });
      
          // No titles should show if there isn't anything in the search bar.
          if (userInput === "") {
            setMatchingMovies([]);
          } 
          // Otherwise, find the titles that match the filter...
          else {
            setMatchingMovies(newFilter);
          }
        };

        const clearSearch = () => {
          // Make input empty and change state.
          setInput("");
          setMatchingMovies([]);
        }

        const updateFavorites = (e, title) => {
          // If the movie isn't already in the fav list...
          if (!FaveArray.fav_movies.includes(e.target.id)) {
            FaveArray._fav_movies.push(e.target.id);
            //alert("Added "+ title + " to favorites");
        }
          else
            alert(title + " is already in favorites.");
          console.log(FaveArray);
          clearSearch();
        };
        
        return (
              <div className="search"> 
                <div className="searchInputs"> 
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={input}
                    onChange={filterSearch}
                  />
                </div>
            {matchingMovies.length != 0 && (
              <div className="dataResult">
                {matchingMovies.slice(0, 10).map((value, index) => {
                  return (
                    <a className='dataItem' target="_blank" id = {value.movieId} onClick = {e => updateFavorites(e, value.title)} >
                      {value.title}
                    </a>                    
                  );
                })}
              </div>
            )}
            </div>
        );
      }
      
export default SearchBar;