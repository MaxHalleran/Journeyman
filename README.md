# Journeyman

A simple nested to do list app that can show lists in the form of Gant charts.

## Instructions

You must have Node, Npm and Typescript installed globally. Using the command line from the project directory, enter the following commands:

```npm i && npm run localserver```

The Journeyman App is now running a local version.

### NPM Scripts

There are a number of npm scripts in the package.json file. Some of these scripts are ran concurrently with other scripts and allow for more complex functionality to be ran simutaneously with one console command.

#### Single purpose scripts

* **test**
	* runs tests
* **start**
	* runs the server script
* **prettier**
	* Runs prettier
* **server**
	* Runs the server script from within the build folder
* **client**
	* runs the top level start client script which starts the react client application
* **build-tsc**
	* Builds typescript once
* **start-tsc**
	* Watches for changes to the project to run build-tsc
* **localserver2**
	* Starts the build server using node and the dotenv/config file
* **localserver**
	* Starts the build server using nodemon allowing for hot reloading
* **local**
	* Concurrently run the local server, client and start-tsc 
* **heroku-postbuild**
	* Used by heroku after a commit has been pulled, moves into the client folder, installs client dependencies and builds the client for production

## TODO

* Auth
	* Validate password
		* Password requirements
	* Oauth 2.0

### Helpful links

* [https://github.com/alan2207/bulletproof-react](Bulletproof React)

Bulletproof React is an interesting template for production level scalable project architecture utilizing some of the more common and best practices and packages of the Node and Npm ecosystem.