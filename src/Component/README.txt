# Twitter Followers Management Application

## Overview

This application fetches and displays Twitter followers' data, allowing users to filter by join date, sort by various criteria, and remove followers. The interface is designed to be clean and professional, utilizing modern web development practices.

## Features

- Fetch followers' data from a given JSON source.
- Display followers' data in a grid layout.
- Filter followers by join date using date pickers.
- Sort followers by various criteria: Twubric Score, Friends, Influence, and Chirpiness.
- Remove followers from the displayed list.
- Responsive and professional CSS styling.

## Components

### App.js

The main React component responsible for fetching data, managing state, and rendering the UI. It includes the following functionalities:

- Fetch followers' data from a remote JSON source.
- Manage state for followers, filtered followers, sorting criteria, sorting order, and date range.
- Functions for sorting followers by criteria, filtering by join date, and removing followers.
- Render the followers' data in a grid layout with filtering and sorting controls.

### App.css

The CSS file providing styling for the application. It includes styles for:

- The main application container.
- Headers and text.
- Filtering and sorting controls.
- Followers' grid layout and individual follower cards.
- Buttons for sorting and removing followers.
- Responsive design adjustments for different screen sizes.

## Usage

1. **Clone the repository**:
    ```
    git clone https://github.com/SAGAR261120/twitter-followers-app.git
    cd twitter-followers-app
    ```

2. **Install dependencies**:
    ```
    npm install
    ```

3. **Run the application**:
    ```
    npm start
    ```

4. **Open the application** in your browser at `http://localhost:3000`.

## Dependencies

- React: JavaScript library for building user interfaces.
- React DatePicker: A date picker component for React.
- CSS for styling the application.

## Project Structure

