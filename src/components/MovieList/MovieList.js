import React, { useState } from 'react';

var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8000/movies.json", false);
req.send(null);
var jsonobj = JSON.parse(req.responseText); 

const MovieList = jsonobj;

export default MovieList