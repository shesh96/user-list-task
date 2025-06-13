# User List Management App

## Description
This is a React application designed to display and manage a list of users. The app provides features such as searching users by name or teacher ID, filtering users by department and status, and paginating the user list with a custom pagination logic.

## Features
- Display a list of users with details including name, teacher ID, department, number of students, and status.
- Search users by name or teacher ID.
- Filter users by department (Finance, Engineer, Arts) and status (Active, Inactive, Blocked, Suspended).
- Pagination with 10 users on the first page and 5 users on subsequent pages.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the application locally, run:
```
npm start
```
This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used
- React
- JavaScript (ES6+)
- CSS

## Folder Structure
- `src/` - Contains the source code of the application.
  - `components/` - Contains React components such as Sidebar, TopBar, FilterBar, UserTable, Pagination, and their styles.
  - `App.js` - Main application component managing state and rendering UI.
  - `index.js` - Entry point of the React application.
- `public/` - Contains static assets and the HTML template.

## Usage
- Use the search bar at the top to search users by name or teacher ID.
- Use the filter options to narrow down users by department and status.
- Navigate through pages using the pagination controls at the bottom of the user list.

## License
This project does not specify a license.
