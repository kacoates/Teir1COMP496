import pandas as pd
import numpy as np
import sklearn.metrics
from scipy.sparse.linalg import svds
from scipy.spatial.distance import cdist
from scipy.spatial.distance import squareform
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

NUMBER_OF_RECS = 10

def initialize_data():
    global ratings
    global movies

    ratings = pd.read_csv("./ml-latest-small/ratings.csv")
    movies = pd.read_csv("./ml-latest-small/movies.csv")

    # Drop timestamp as it's useless
    ratings = ratings.drop('timestamp', axis = 1)
    
    # We will move userId to be used as rows and the columns are the movieIds.
    # Ratings are the values connecting them
    ratings = ratings.pivot(index = 'userId', columns = 'movieId', values = 'rating')

    # For every non-zero, replace with zero.
    ratings = ratings.loc[:, (ratings != 0).any(axis=0)].fillna(0)

    # Drop movies where zeros make up 96% or more of the values.
    ratings = ratings.drop(columns = ratings.columns[ratings.eq(0).mean()>.96])

    matrix_factorization_calculations()

def matrix_factorization_calculations():
    global predictions
    # Grab rating values for all users
    all_ratings = ratings.values

    # Find mean rating values for all users
    user_means = np.mean(all_ratings, axis = 1)

    # Demeaning ratings values
    ratings_demeaned = all_ratings - user_means.reshape(-1, 1)

    # Apply Matrix Factorization
    U, sigma, Vt = svds(ratings_demeaned, k = 50)
    sigma = np.diag(sigma)
    predicted_vals = np.dot(np.dot(U, sigma), Vt) + user_means.reshape(-1, 1)
    predictions = pd.DataFrame(predicted_vals, columns = ratings.columns)

    # Fix indexing
    predictions = pd.DataFrame(predictions, index=ratings.index-1)

initialize_data()
matrix_factorization_calculations()

# Get dataframe of movie info given list of movieIds (movie_list) 
def get_movie_titles(movie_list):
    return movies[movies['movieId'].isin(movie_list)]


def get_closest_user(list_of_movies):
    
    # Just getting a random row to use to fill in...
    user_row = ratings.tail(1).copy()
    
    # Set all values to 0
    for col in user_row.columns:
        user_row[col].values[:] = 0
    
    # Set fav movie picks to 5.0
    for item in list_of_movies:
        user_row[item].values[:] = 5.0
        
    # Find closest user...
    closest_userId = distance_calc(user_row)
    
    return closest_userId

def distance_calc(row):
    # Calculate cosine similarity of user and existing users
    distances = cdist(ratings, row, metric = "cosine")
    
    # Most similar is where the value is smallest
    most_similar_user = np.where(distances == distances.min())
    
    # Printing user that matches most similarly to the selected movies
    print(most_similar_user[0][0] + 1, " ", distances[most_similar_user])
    
    # Return userId (plus 1 to account for index starting at 0)
    return most_similar_user[0][0] + 1

def get_preds(given_userId, list_of_movies, num_recs):
    
    # Sort predictions of user...
    sorted_preds_for_user = predictions.iloc[given_userId - 1].sort_values(ascending = False).to_frame()
    
    # Remove existing / selected favorite movies from predictions
    for i in list_of_movies:
        try:
            sorted_preds_for_user = sorted_preds_for_user.drop(i)
        except:
            pass
    return sorted_preds_for_user.head(num_recs)





class FavoriteMovies(BaseModel):
    fav_movies: List[int]

@app.get('/movies')
def get_all_movies():
    return_movies = movies[movies['movieId'].isin(predictions.columns)].drop(columns=['genres'])
    return return_movies.to_json(orient='records')

@app.post('/recs')
def movie_recs(favorite_movies: FavoriteMovies):
    userId = get_closest_user(favorite_movies.fav_movies)
    recs = get_preds(userId, favorite_movies.fav_movies, 10)
    movie_pred = recs.index.values.tolist()
    result = get_movie_titles(movie_pred)
    return result.to_json(orient = 'records')
