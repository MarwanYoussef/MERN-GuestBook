## About

A Guestlook web application built on MongoDB, React.js, Express and Node.js + Jsonwebtokens (JWT)
for user registration and authentication. Guestlook supports Create/Read/Update/Delete operations for posts.

## Getting Started:

To test it on your own computer:

- Add your mongodb uri in .env file in the server directory.
- Run **npm install** inside server directory to install server's depenedencies.
- Run **npm install** inside root directory to install client's depenedencies
- Go to the server directory; It holds code for Server side. Run **npm run dev**
- In the root directory; It holds code for Client side. Run **npm run dev**

## Overview App Structure

This is a full stack web application, client side or front-end is implemented with React.js. Also, React Router
was used to manage multiple routes from the client side. You can find logic seperated from UI components inside the
src directory.

The server side is simple server made with Node.js Express framework and MongoDB a noSQL database.
MongoDB can be used locally or in the cloud, depending on your development environment you need to specify the
Mongo_URI before connecting to the Database. Mongo_URI can be changed from dbConfig.js file or .ENV file.

## Client side - How to Run

The componentsV2 directory is divided into two types of components, containers and UI.
Open a terminal inside the root directory and run **npm run dev**

## Server side - How it Run

As on the client, create your own environmental file with the mongo URI of your database.
Open a terminal inside the server directory and run **npm run dev**


