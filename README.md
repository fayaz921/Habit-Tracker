# Habit Tracker

**Live Demo:** https://habit-tracker-fayaz.vercel.app/

A modern, responsive habit tracker web application built with React, Vite, Bootstrap 5, and date-fns. Track your daily habits with a weekly grid interface, view streaks, and persist data across sessions using localStorage.

## Tech Stack

- **React 18** - UI library for building interactive interfaces
- **Vite** - Fast development server and build tool
- **Bootstrap 5** - CSS framework for responsive design and components
- **date-fns** - Modern date utility library
- **uuid** - For generating unique habit IDs
- **LocalStorage** - Persistent client-side storage

## Installation & Setup

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev` - Start the development server at http://localhost:5173
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally

## Running Locally

To run the habit tracker on your local machine:

1. Ensure you have Node.js (v16+) and npm installed
2. Run `npm install` to install all dependencies
3. Run `npm run dev` to start the development server
4. Open your browser and navigate to http://localhost:5173

## Vercel Deployment

This application is ready for deployment on Vercel with zero configuration:

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Vercel will automatically detect the Vite/React setup and build the application
4. Your habit tracker will be deployed with a live URL

Alternatively, you can deploy using the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Folder Structure

```
src/
├── components/
│   ├── AddHabitForm.jsx      # Form for adding new habits
│   ├── EmptyState.jsx        # Displayed when no habits exist
│   ├── HabitGrid.jsx         # Main habit tracking grid
│   └── WeekNavigator.jsx     # Week navigation controls
├── styles/
│   └── App.css               # Global styles and custom CSS
├── utils/                    # Utility functions (empty for now)
├── data/                     # Data-related files (empty for now)
├── App.jsx                   # Main application component
└── main.jsx                  # Application entry point
```

## Features

- **Weekly Habit Grid**: Visual representation of habits across days of the week
- **Habit Management**: Add, rename, and delete habits
- **Daily Tracking**: Toggle habit completion for each day
- **Streak Tracking**: View consecutive day streaks for each habit
- **Week Navigation**: Move between past, current, and future weeks
- **Data Persistence**: All habits and checkmarks saved to localStorage
- **Responsive Design**: Works on mobile (360px) and desktop screens
- **Today Highlighting**: Current day column visually distinguished
- **Accessible UI**: Keyboard navigation, focus states, and proper labels

## Design Decisions

- **Week Start**: Chose Monday as the start of the week following ISO 8601 standard and common usage in many countries
- **Streak Calculation**: Counts consecutive days up to yesterday if today is unchecked, providing a realistic "current streak" metric
- **Visual Hierarchy**: Habits prioritized on left, days across top, with today clearly highlighted
- **Interaction Feedback**: Subtle animations and hover states for satisfying user feedback
- **Empty State**: Encouraging message with clear call-to-action for first habit
- **Responsive Layout**: Adapts from multi-column desktop view to stacked mobile view