import React, { useState } from 'react';
import FaveArray from '../FaveArray/FaveArray';
import Recommendations from '../Recommendations/Recommendations';
import TableList from '../FaveList/TableList';

import "./SearchButton.css";


const sendRecRequest = () => {
    
    // If we haven't selected at least 5 movies, don't let them send a req...
    if (FaveArray.fav_movies.length < 5) {
        alert("Not enough movies selected.");
    } 
    
    // Otherwise, send a request and 
    else {

        // Reset recommendations at start
        Recommendations._recs = []

        // Get recommendations from api
        var req = new XMLHttpRequest();
        req.open("POST", "http://localhost:8000/recs", false);
        req.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify({"fav_movies" : FaveArray.fav_movies});
        req.send(data);

        // Read json
        var json = JSON.parse(req.responseText)

        // For each record, add it to our recommendations
        for(var i in json) {
            Recommendations.newRec(json[i].movieId, json[i].title, json[i].genres);
        }

        console.log(Recommendations._recs)
    }
}

const resetSearch = () => {
    
    // Reset everything
    FaveArray._fav_movies = []
    Recommendations._recs = []
    alert("Reset Favorites!")
}

function SearchButton () {
    return <div class="btn-wrapper">
                    
                    <button class="btn" onClick={sendRecRequest}>Get Recommendations</button>
                    <button class="btn" onClick={resetSearch}>Reset</button>
                </div>
    }
    export default SearchButton;