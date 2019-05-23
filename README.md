# Bar Buddies
COMP 2930 Projects, Bar Buddies project
A social media fitness app.

## Contents
* node_modules - folder of all of the npm modules
* dist - forlder of built code used for production
* src - folder that contains the components and router
* src/router - folder that routes the application, creates the Vue object, has the main Vue component, and stores the repository functions for the back end
* src/components - stores all of the Vue components
* index.html - the main html that is rendered initially, and loads App.vue which loads the other components dynamically

## Deployment
* frontend - Surge.sh
* backend - Digital Ocean (Ubuntu 18.04)
* Mongodb - Scalegrid.io on a Digital Ocean Mongodb droplet

## Built With
* [Html] Used to do website structure
* [Bootstrap] - Used to style all pages
* [JavaScript] - Used for functions and back end
* [VueJS] - Used for dynamic page rendering
* [MongoDB] - NoSQL Database
* [Express] - Server routing
* [Axios] - Used to make webcalls to the server
* [NodeJS] - used to run backend server
* [Bcrypt] - used to encrypt passwords and make comparisons for password
* [Cors] - Used for cross origin routing
* [Body-parser] - Extracts body portion and exposes it on req.body for use
* [CSS] - Used to design the project pages

##How To Run
inside of src/repository.js, uncomment the BASE_URL with the localhost, and comment the BASE_URL with the IP address out. It should look like this:

const BASE_URL = 'http://localhost:5000'
// const BASE_URL = 'http://159.203.57.79:5000'

Make sure you install all of the dependencies for this application as well, so run 
$ npm install 
$ npm install --save Axios body-parser cors express bcrypt mongoose vue vue-session 

In the main folder Within Team-17-COMP-2930 (barbuddies folder) with the terminal type npm run dev to launch the application locally
On a second terminal you'll want to type npm run api which is a script that runs node api/server.js 
at which point it'll launch the database locally this is to run the application locally

To run it based off of our deployed database and website simply just visit:
barbuddies.surge.sh
You can view any database changes such as creating a user, a group, by using http://159.203.57.79:5000/users or 
http://159.203.57.79:5000/groups

## Authors

* Luke Hansen - [lukejohnhansen](https://github.com/lukejohnhansen)
* Gina Kim - [ginajhkim](https://github.com/ginajhkim)
* Jeffrey Kuo - [jeffreyTK](https://github.com/JeffreyTK)
* Irene Hsieh - [hsiehii](https://github.com/hsiehii)
* Jethro Del Rosario - [jethrodelrosario](https://github.com/jethrodelrosario)
