This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge Requirements
You are tasked with developing an prototypical solution for displaying the collected data to our test users inside of a web browser. The objective is to give them an instant overview over the current health and activity of the installed machines.

## Applicaton Workflow
The assignment task consists of two parts. First need to build a simple React application that
shows a map and markers on it. A user should be able to view, create, edit and delete this markers.
All the changes should be immediately visible on the map. The second part is to actually build the
backend API in Ruby for allowing these CRUD operations for markers

## Packages Used
Redux,
Redux-Saga,
Lodash,
Cypress,
Jest,
Enzyme,
React-Bootstrap,
Google-Maps-React

## Notes
This react app has dependency with the ruby on rails api that I have created here: 
https://github.com/ShahriatHossain/ruby-on-rails-api-markers

## Testing
I have integrated both unit and end to end testing using jest, enzyme and cypress. 
### To test e2e testing using cypress command is: 'yarn cypress' to open the cypress testing panel and 'yarn cypress:all' to test all test files in terminal console panel
### To test unit testing using jest and enzyme is: 'yarn test'

## Configuration
### Please find axios-markers.js file in the project to set api base url to access api using axios.
### Please find cypress.json file in the project to set app base url for e2e testing
### Please find constants.js file in the project to set GOOGLE MAP KEY

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
