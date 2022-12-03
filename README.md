
# Tier1 Movie Recommendation System




## Authors

- [@kacoates](https://www.github.com/kacoates)
- [@abelcano](https://www.github.com/abelcano)


## Installation Guide

### Back-End

#### Requirements
- Python Environment (We used [Anaconda](https://www.anaconda.com/))
  - Pandas
  - NumPy
  - SciPy
  - FastAPI
  - Pydantic
  - Typing
  - JSON
  - Uvicorn

*For any missing packages please ```pip install``` them. These are required for the project run.*

In PowerShell, navigate to the project repository folder, then the **backend** folder. 

Your path should look something like this:
```bash
C:\...\Tier1COMP496\backend
```

Run the following command:
```bash
python -m uvicorn main:app --reload
```
The console should show the following output if all packages are installed and the server started:

<p align="center">
  <img src="https://i.imgur.com/ybOY6Iv.png">
</p>

### Front-End

#### Requirements
- [Node.js](https://nodejs.org/en/)
- React
- MaterialUI
- Styled
- Chrome, Firefox, or any compatible browser

*You may need to enable legacy-peer-deps before installing node.js modules. Do so by running ```npm config set legacy-peer-deps true``` then running ```npm i```.*

In PowerShell, navigate to the project repository folder. 

```bash
C:\...\Tier1COMP496
```

Run the following command:
```bash
npm start
```

This should open a browser window with the app loaded. The console may show some warnings, but no errors.

## User Manual
![](https://i.imgur.com/3HcCZlb.png)

1. Using the search bar, type in the title of a movie you are searching for. You should see a list of filtered results as you type.

<p align="center">
  <img src="https://i.imgur.com/rSZ1w6R.png">
</p>

2. When the movie you seek appears in the filtered results, click on it. Repeat this at least five times. In other words, Select five of your favorite movies. You should see the counter in the moddle of the screen change as you select more movies.

<p align="center">
  <img src="https://i.imgur.com/AP26xNP.png">
</p>

3. When you finish selecting at least five movies, the counter will turn green and present you with the text "Ready!". Click on the button that says "Get Recommendations" to generate a list of recommendations based on the movies selected.

<p align="center">
  <img src="https://i.imgur.com/oXoUcfR.png">
</p>

4. The recommendations will appear in place of the counter and display what the algorithm returns as suggested movies for the user.

<p align="center">
  <img src="https://i.imgur.com/CdJcv1E.png">
</p>

5. If you would like to try with a new set of movies, click on the button that says "Reset". The favorite movies list will clear, the recommendations will disappear, and an alert telling you that the list as has been cleared will appear.

<p align="center">
  <img src="https://i.imgur.com/FR5yzQ6.png">
</p>

6. Repeat!