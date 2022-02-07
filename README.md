# Strapi application

## Description

This is the strapi backend of my personal blog built with Gatsby. Strapi is an easy to use headless CMS

## Installation

Clone the repository and cd into the project directory  
open the `.env.example` file, copy its content, create a `.env` file and paste it
Create a MongoDB Cluster, get your details and fill them in the `.env` file

- DBHOST=
- DBNAME=
- DBUSERNAME=
- DBPASSWORD=

Goto to https://cloudinary.com/, create an account and fil your details in the `.env` file

- CLOUDINARY_NAME=
- CLOUDINARY_KEY=
- CLOUDINARY_SECRET=

Run `npm install`  
To run locally, run `npm run develop`
Server runs on `PORT 1337`
Goto http://localhost:1337/admin/ to create a new account and also create some contents, that's blog posts

After this goto the frontend app and clone the repo
https://github.com/prosper74/blog-fe

## Link

Access app via https://prosper-blog.netlify.app/

## Author

[Prosper Atu]
