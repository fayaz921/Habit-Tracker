import { format, addWeeks } from 'date-fns';
import './WeekNavigator.css';

const WeekNavigator = ({ currentWeekStart, onPreviousWeek, onNextWeek, onCurrentWeek }) => {
  const weekStart = format(currentWeekStart, 'MMM dd');
  const weekEnd = format(addWeeks(currentWeekStart, 1), 'MMM dd, yyyy'); // Actually, end of week is start + 6 days

  // Correct calculation for week end (Sunday if week starts Monday)
  const weekEndDate = addWeeks(currentWeekStart, 1);
  const weekEndFormatted = format(weekEndDate, 'MMM dd, yyyy');

  return (
    <div className="week-navigator">
      <button className="nav-button" onClick={onPreviousWeek}>
        « Previous Week
      </button>
      <span className="week-range">
        {weekStart} – {weekEndFormatted}
      </span>
      <button className="nav-button" onClick={onNextWeek}>
        Next Week »
      </button>
      <button className="nav-button secondary" onClick={onCurrentWeek}>
        This Week
      </button>
    </div>
  );
};

export default WeekNavigator;