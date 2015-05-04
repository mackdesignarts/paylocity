# Paylocity Code Challenge

An ASP.NET MVC Angular application for determining employee payroll deductions.

Requires Windows for IIS or Visual Studio / IIS express. 

## Installation

1. Clone repository. Make sure Node.js and NPM is installed globally.
2. From the command line, navigate to the .Client folder and run 
	- >npm install
	- >bower install
	- >gulp
3. Create a new database using SSMS.
4. In Visual Studio, navigate to the .Data folder and open the .edmx file.
5. Choose "Create database from model" to generate SQL query.
6. Right click surface and select "execute" to build tables in database.
7. Copy connection string generated by Entity Framework from .Data App.config and paste in main MVC application's Web.config
8. Sanity check by building / launching from IIS express.

## Features

Application has a simple interface to input Employee and Dependent attributes. After generating a preview, select "save employee" to commit to database. Check database tables and see your records.  