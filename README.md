# Blog_Chart
 # Blog Management System

## Overview

The Blog Management System is a full-stack web application built using React.js, Express.js, Node.js, and MongoDB Atlas. It enables users to manage blog posts through Create, Read, Update, Delete (CRUD), and Search functionalities.

# Blog Website

## Home Page

The Home Page displays all published blog posts in a clean and user-friendly layout. Users can browse recent articles and quickly navigate to the content they are interested in.

![Home Page](images/Home%20Page.jpeg)

## Search Page

The Search Page allows users to find blog posts instantly by entering keywords or titles. It helps users discover relevant content quickly and improves the overall browsing experience.

![Search Page](images/Search%20Page.jpeg)

## Add Blog Page

The Add Blog Page enables administrators or authors to create and publish new blog posts. Users can enter the blog title, content, and other details through a simple form interface.

![Add Blog Page](images/Add%20Blog%20Page.jpeg)

## Features

* Create New Blog Posts
* View All Blogs
* View Single Blog Details
* Update Existing Blogs
* Delete Blogs
* Search Blogs by Keyword
* REST API Integration
* MongoDB Atlas Cloud Database

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Material UI

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

backend/

* config/
* controllers/
* models/
* routes/
* server.js

frontend/

* src/
* components/
* pages/
* services/

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

## Author

Niranjan Umesh Mali

