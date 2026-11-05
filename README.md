# JoinEasy – Student & Teacher Dashboard

JoinEasy is a role-based school management web application developed using React.js. It provides separate dashboards for students and teachers to manage academic activities efficiently.

## Features

- Mock login with seeded users.
- Role-based dashboards for students and administrators.
- Student assignment viewing.
- Create, edit and delete assignments.
- Google Drive links for assignment submissions.
- Teacher attendance management.
- Individual student attendance summaries.
- Notifications management.
- Local Storage for data persistence.
- Responsive user interface.

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React Router DOM
- React Icons
- Vite
- Browser Local Storage
- Git and GitHub

## Installation and Setup

1. Clone the repository:

   `git clone https://github.com/shridhar-m-kulkarni/Student_and_Teacher_Dashboard.git`

2. Navigate to the project directory:

   `cd Student_and_Teacher_Dashboard`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal.

## Data Storage

The application uses browser Local Storage to persist user, assignment and attendance information.

## Future Enhancements

- Backend integration.
- Database connectivity.
- Real authentication and authorization.
- Cloud-based assignment submissions.
- Attendance reports and analytics.

## 📁 Project Structure

```text
Student_Assignment/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Assignments.jsx
│   │   ├── MainBar.jsx
│   │   ├── ManageAssignments.jsx
│   │   ├── MyContext.jsx
│   │   ├── Notifications.jsx
│   │   ├── ProfilData.jsx
│   │   └── SideBar.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── IntroPage.jsx
│   │   ├── Login.jsx
│   │   ├── MainPage.jsx
│   │   └── TimeTable.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```


## 🏗️ Component Architecture

The application follows a component-based architecture using React.js. It separates pages, reusable components, shared state management, and mock data to maintain a clean and organized codebase.

### Component Hierarchy

```text
App.jsx
│
├── IntroPage.jsx
│
├── Login.jsx
│
└── MainPage.jsx
    │
    ├── SideBar.jsx
    │
    ├── MainBar.jsx
    │
    ├── Assignments.jsx
    │
    ├── ManageAssignments.jsx
    │
    ├── Notifications.jsx
    │
    ├── ProfilData.jsx
    │
    └── TimeTable.jsx
```

### Main Components

- **App.jsx:** Root component that manages the application's overall structure and page rendering.
- **IntroPage.jsx:** Introduction or landing page of the application.
- **Login.jsx:** Handles the user login interface.
- **MainPage.jsx:** Main application page that brings together the primary UI components.
- **SideBar.jsx:** Provides sidebar navigation.
- **MainBar.jsx:** Displays the main navigation or header section.
- **Assignments.jsx:** Displays assignment-related information.
- **ManageAssignments.jsx:** Handles assignment management functionality.
- **Notifications.jsx:** Displays notifications.
- **ProfilData.jsx:** Displays user profile information.
- **TimeTable.jsx:** Displays the timetable.

### State Management

- **MyContext.jsx:** Uses React Context API to share application state between components.
- **mockData.js:** Stores sample data used throughout the application.

### Assets

- **BannerImage.png:** Application banner image.
- **JoinEasy_School_Logo.png:** Application logo.
