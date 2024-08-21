

[![Jekyll site CI](https://github.com/SOliv1/Ravenous/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/SOliv1/Ravenous/actions/workflows/jekyll-docker.yml) [![pages-build-deployment](https://github.com/SOliv1/Ravenous/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/SOliv1/Ravenous/actions/workflows/pages/pages-build-deployment) [![CodeQL](https://github.com/SOliv1/Ravenous/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/SOliv1/Ravenous/actions/workflows/codeql-analysis.yml) 
 [![Jekyll site CI](https://github.com/SOliv1/Ravenous/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/SOliv1/Ravenous/actions/workflows/jekyll-docker.yml)
 [![Netlify Status](https://api.netlify.com/api/v1/badges/616e393e-0be8-4ddf-b64c-28b6d749fd8e/deploy-status)](https://app.netlify.com/sites/kuk-ravenous/deploy-status?branch=master)

See live site [here](https://kuk-ravenous.netlify.app)

## Objectives
Building a restaurant website for recommendations and allows users to search for local businesses based on their location and keywords. The app replicates the core functionality of Yelp.  To use this app, you must temporarily unlock access to the demo. 

[Click here for cors-anywhere-demo ](https://cors-anywhere.herokuapp.com/corsdemo)

> Warning regarding cors-anywhere
> Please note that cors-anywhere is used as a temporary workaround to CORS related issues which occur when developing a front-end app without > a backend. In a commercial environment a project would have a backend and not need this CORS workaround.

> The limitation of cors-anywhere is that access to this service is temporary. It runs out. Which stops the API from working, until access is > requested manually from cors-anywhere. Access lasts maybe one or two days only.

> It is ok to use as a stop-gap in development, or for novices building sample projects to develop and practice skills rather than for serious > use; is not a long term solution.

## Technologies 
HTML
CSS
JavaScript
React
Git/GitHub
Yelp API

##Features
The app generates a list of recommendations from Yelp
Restaurant information includes 
1. image
1. name 
1. address 
1. category
  2.  rating
  3.  review count

Users can search recommendations 
by location or by keywords

Users can also sort results by Best Match, Highest Rated, or Most Reviewed


# Getting Started with Create React App
## This project was bootstrapped with Create React App.
### CodeCademy
![Ravenous](https://github.com/user-attachments/assets/c7a5cd79-c866-4617-8bdd-0ce249bc77b9)

### This is the complete project:
Ravenous (projects 1, 2, 3 and 4).
Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

npm i dotenv express cors

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

#### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Within the Ravenous directory in your terminal, run npm install whatwg-fetch --save to install the whatwg-fetch polyfill and add it to your package.json file.
Set up and hide Api key from view
const SECRET_API_KEY=xxxxxxxxxxxxxxx then import the SECRET_API_KEY variable and use it where you need it. Given constants.js is in gitignore, it won’t be pushed to github.
even better would to also make constants.js.example, in example, define the variable but give them an empty string:

const SECRET_API_KEY=`` then in your readme.md, include instructions how this should be set up (copy the example file, and set the variable). the example file can safely be pushed to github.

See StackOverflow here

See Codecademy here

Yelp
https://www.yelp.com/developers/v3/manage_app

Ravenous
