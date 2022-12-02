import React, { useState } from 'react';

export class RecommendationObj {
    constructor() {
        this.recs = [];  
    }
    get recs() {
        return this._recs;
    }
    set recs(recs) {
        this._recs = recs;
    }
    newRec(movieId, title, genres) {
        let m = new Recommendation(movieId, title, genres)
        this._recs.push(m)
    }
}

export class Recommendation {
    constructor(movieId, title, genres) {
        this.movieId = movieId;
        this.title = title;
        this.genres = genres;
    }
}

const Recommendations = new RecommendationObj();

export default Recommendations