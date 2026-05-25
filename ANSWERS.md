# Answers to Assessment Questions

## 1. How to run
To run this habit tracker application on a fresh machine:

1. Ensure you have Node.js (version 16 or higher) and npm installed
2. Clone or download this repository to your local machine
3. Navigate to the project directory in your terminal
4. Run `npm install` to install all dependencies
5. Run `npm run dev` to start the development server
6. Open your browser and visit http://localhost:5173

To build for production:
- Run `npm run build` to create a production-ready build in the `dist` directory
- Run `npm run preview` to locally preview the production build

## 2. Stack & design choices
I chose React with Vite for this task because:
- React provides excellent component reusability and state management, perfect for a habit tracker with interactive elements
- Vite offers extremely fast development server startup and hot module replacement, improving developer experience
- The combination is modern, widely adopted, and has excellent tooling support

Two specific design decisions:
1. **Today's column highlighting**: I implemented a subtle but clear visual indicator for today's date using a blue border around the entire cell combined with a light blue background for the header. This makes it immediately obvious where the user is in the week without being distracting. The decision was made in the HabitGrid component where I conditionally apply the 'today-cell' and 'today-header' classes based on date comparison using date-fns' isToday function.

2. **Responsive grid behavior**: On larger screens, the habit grid displays habits vertically on the left with days horizontally across the top. On mobile screens (below 768px), I stacked the habit name above the day buttons in a vertical layout, maintaining usability while adapting to limited horizontal space. This was achieved using CSS media queries that adjust padding, font sizes, and button dimensions to ensure touch targets remain adequate on small screens.

## 3. Responsive & accessibility
On a 360px-wide phone:
- The week navigation controls stack vertically for better touch accessibility
- Habit names appear above their respective day buttons rather than to the left
- Button sizes increase slightly to accommodate touch input
- The overall layout remains functional with horizontal scrolling if needed (though designed to avoid it)

On a 1440px laptop:
- Full weekly grid is visible with habits on left and days across top
- Week navigation appears in a single row
- Ample whitespace creates a clean, spacious feel

Accessibility consideration handled:
- I implemented proper focus states on all interactive elements (buttons, inputs) using a 2px solid outline that meets WCAG contrast requirements. This ensures keyboard navigators can clearly see which element has focus.

Accessibility consideration knowingly skipped:
- I did not implement ARIA live regions to announce habit checkmark changes to screen reader users. While each checkmark button has an aria-label describing its state, dynamic announcements when state changes would provide better feedback. I skipped this due to time constraints and because the visual feedback is quite clear, but for a production application targeting broader accessibility compliance, this would be an important enhancement.

## 4. AI usage
I used AI assistance in the following places:
1. **Initial project structure**: I asked the AI to help set up the basic React/Vite project structure with Bootstrap and date-fns. It provided the initial file organization which I then refined based on my specific needs.
   
2. **Streak calculation logic**: I requested help with the algorithm for calculating consecutive day streaks. The AI suggested a basic approach which I then corrected and improved - the initial suggestion had a bug where it wasn't properly decrementing the date in the loop, which I fixed by implementing proper date manipulation using JavaScript's Date.setDate() method.

3. **CSS styling guidance**: For the habit grid layout, I asked for suggestions on making the table responsive. The AI provided a starting point for media queries which I adapted to better fit my design vision, particularly adjusting the breakpoint and refining the mobile layout to stack habit names above day buttons rather than hiding columns.

One specific change I made to AI output:
The AI initially suggested using fixed-width columns for the habit grid (e.g., width: 60px for day cells). I changed this to use a more flexible approach with min-width properties and allowed the table to distribute space more naturally. I made this change because fixed widths would cause horizontal scrolling on smaller screens and wouldn't adapt well to different habit name lengths. The revised approach uses min-width: 40px with flexible sizing that works better across different screen sizes while maintaining usability.

## 5. Honest gap
One aspect that isn't polished enough is the animation and feedback when toggling habit checkmarks. Currently, there's a basic scale transform and color change, but it lacks the satisfying, polished feel mentioned in the requirements.

With another day, I would improve this by:
- Adding a more sophisticated animation sequence (perhaps a spring-like motion using CSS keyframes or a library like Framer Motion)
- Implementing a subtle sound effect option (with user preference to disable)
- Adding a "confetti" or celebration animation when streaks reach certain milestones (7 days, 30 days, etc.)
- Refining the hover and active states to provide more tactile feedback

The current implementation works functionally but doesn't reach the level of "satisfying and polished" interaction that would make users delight in checking off their habits. These enhancements would significantly improve the emotional resonance of the application.