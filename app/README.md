# Tech Assessment app

---

The task was to create a SPA with create-react-app.

## Description

---

The App has been developed in React framework.
It consumes the APIs provided and renders the appropriate screans.

The App has a static NavBar and 2 pages: Home and Page2.
React router has been implemmentted on these two pages.
Home page has 2 sections: Section1 and Section2. 
Switching between those two has been handled using conditional rendering.


## Project structure

---

    .
    ├── app
    |   ├── public                      # images
    |   ├── src     
    |   |   |── __tests__               # unit tests
    |   |   |── components              # basic components used
    |   |   |    |── ...                # components folders
    |   |   |    |── NavBar      
    |   |   |    |    |── NavBar.jsx    # component
        |   |    |    |── NavBar.css    # component's style           
        |   |── pages                   # pages of the app
        |   |    |── ...                # pages folders
        |   |    |── Home   
        |   |    |    |── Home.jsx      # page
        |   |    |    |── Home.css      # pages's style
        |── App.jsx                     # main App
        |── index.jsx                   # index.jsx init file
        |── ...
        ├── .eslintrc.json              # eslint conf
        ├── .prettierrc                 # prettier conf
        ├── package.json                # package.json
        ├── ...
        |
        │   README.md                   # README file.
        └── ...




#### Technologies Used

In this project React v16.13.1 was used implementing [Hooks](https://react-redux.js.org/next/api/hooks).


#### Responsive layout

Regarding the styles used, the methodology in this project is to have a global css file and
then each of the components and pages have their own css.

### Testing with [Jest](https://jestjs.io/) | [React Testing Library](https://testing-library.com/) | 

Unit/Integration tests are located in `__tests__` folder for each component.


### Installation

``cd app``

``npm install``

``npm start``

### Running the tests

``cd app``

``npm run lint`` or `eslint 'src/**/*.{js,jsx}'`


