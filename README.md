
## Overview
This application allows users to register and keep track of the number of attendees at a wedding - particularly important in 2020 to ensure you're not attending an overcrowded event. 

## Frontend
The FE is written in vanilla JS, CSS and HTML, it is compiled with Babel and bundled with Webpack.

Start up the application

``` cd client && npm install && npm run start ```

## Firebase Hosting 
Utilising firebase hosting to serve the frontend code.

## Firebase Functions
This application utilises firebase functions which serve as a backend. This is written in Typescript and supports GET, POST, PUT, DELETE commands.

## Firebase Firestore 
Utilising firebase firestore as the persistence layer.

## Github actions
On push to the main branch Github actions runs a pipeline which installs dependencies, and deploys the application to firebase.
