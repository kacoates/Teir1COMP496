
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
uvicorn main:app --reload
```
The console should show the following output if all packages are installed and the server started:

![](https://i.imgur.com/ybOY6Iv.png)

### Front-End

#### Requirements
- [Node.js](https://nodejs.org/en/)
- React
- MaterialUI
- Styled
- Chrome, Firefox, or any compatible browser

*You may need to enable legacy-peer-deps before installing node.js packages. Do so by running ```npm config set legacy-peer-deps true``` then running ```npm i```.*

In PowerShell, navigate to the project repository folder. 

```bash
C:\...\Tier1COMP496
```

Run the following command:
```bash
npm start
```

This should open a browser window with the app loaded. The console may show some warnings, but no errors.

![](https://i.imgur.com/3HcCZlb.png)