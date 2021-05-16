# UJP

A simple nested to do list app that can show lists in the form of Gant charts.

## Environments

* dev
* staging
* production

## Database 

Database is named ujp.

### Issues

* Database connection - the database connection to the server often gives connection issues. We want both the live database connection and the local database connection (with the env file configuring environment variables) to work with no manual configuration needed.