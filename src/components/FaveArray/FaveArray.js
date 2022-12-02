import React, { useState } from 'react';

class FavMovies {
    constructor() {
        this.fav_movies = [];
    }
    get fav_movies() {
        return this._fav_movies;
    }
    set fav_movies(fav_movies) {
        this._fav_movies = fav_movies;
    }
}

const FaveArray = new FavMovies();
export default FaveArray