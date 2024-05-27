# Stratex Movie App

## Overview

This project is a responsive React application with two pages : a movie list and a favorite movies list. It uses Redux for state management, Tailwind CSS for styling, and Vite as the build tool. The movie data is fetched from a dummy API.

**Note :** The API doesn't provide proper images for all movies, so an alternate image is added for movies that don't have an image.

## Features

- Fetch movies data from an API.
- Display movies in a list sorted by rating from highest to lowest.
- Toggle movies as favorite/unfavorite.
- Redirect to IMDb page on clicking a movie card.
- Display favorite movies on a separate page.
- Responsive design for desktop, tablet, and mobile devices.
- Toast notifications for adding/removing favorites.
## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS
- Vite
- Axios
- React Hot Toast
## Setup Instructions

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn

### Getting Started

1. **Clone the repository :**

   ```
   git clone https://github.com/Aftab1112/stratex-movie-app.git
   cd stratex-movie-app   
2. **Install dependencies :**

    ```bash
    npm install
     or
    yarn install 

3. **Set up environment variables :**
Create a '.env' file in the root directory and add the following line:

    ```
    VITE_MOVIES_API_URL = https://dummyapi.online/api/movies
4. **Run the development server :**

    ```
    npm run dev
    or
    yarn dev
## Deployed Link

You can also access the deployed application by clicking below link : 

[Stratex Movie App](https://stratex-movie-app-one.vercel.app/)
## Author

**Aftab Reshamwale**

Please feel free to suggest improvements for my project.

