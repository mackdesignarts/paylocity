# Basic ASP.NET MVC / Angular / Node Application

An ASP.NET MVC Angular application for determining employee payroll deductions. This application was built as part of a code challenge. Its a barebones, simple web app that can be installed on Windows machines.

It demonstrates how I structure full stack Angular, Node and ASP.NET technologies with an MS SQL data store.

## Components
1. Entity Framework ORM using model-first
2. Web API RESTful services
3. AngularJS client and UI data model
4. Node tools to manage JavaScript and front-end asset deployment
5. MS SQL database with T-SQL query language 
6. Gulp and Bower managing dependencies on the front end

Requires Windows for IIS or Visual Studio / IIS express. 

## Installation

1. Clone repository. Make sure Node.js and NPM is installed globally.
2. From the command line, navigate to the .Client folder and run, in this order: 
	- > npm install
	- > bower install
	- > gulp
3. Create a new database using SSMS.
4. In Visual Studio, navigate to the .Data folder and open the .edmx file.
5. Right click surface and choose "Create database from model" to generate SQL query.
6. Right click surface and select "execute" to build tables in database.
7. Copy connection string generated by Entity Framework from .Data App.config and paste in main MVC application's Web.config
8. Sanity check by building in IIS or launching from IIS express in Visual Studio.

## Features

Application has a simple UI to input Employee and Dependent attributes. 

After generating a preview, select "save employee" to commit to database. Check database tables and see your records.  
