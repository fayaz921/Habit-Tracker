import { format, isToday } from 'date-fns';
import './HabitGrid.css';

const HabitGrid = ({ habits, weekDays, onToggleCheckmark, onUpdateHabitName, onDeleteHabit, calculateStreak, currentWeekStart }) => {
  return (
    <div className="habit-grid-container">
      <table className="habit-table">
        <thead>
          <tr>
            <th className="habit-name-header">Habit</th>
            {weekDays.map((day, index) => (
              <th key={index} className={`${isToday(day) ? 'today-header' : ''}`}>
                {format(day, 'EEE')}
                <br />
                <small>{format(day, 'dd')}</small>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit.id} className="habit-row">
              <td className="habit-name-cell">
                <div className="habit-name-container">
                  <span className="habit-name">{habit.name}</span>
                  <button
                    className="edit-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newName = prompt('Edit habit name:', habit.name);
                      if (newName !== null && newName.trim() !== '') {
                        onUpdateHabitName(habit.id, newName.trim());
                      }
                    }}
                    title="Edit habit"
                  >
                    ✏️
                  </button>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('Delete this habit?')) {
                        onDeleteHabit(habit.id);
                      }
                    }}
                    title="Delete habit"
                  >
                    🗑️
                  </button>
                </div>
                <div className="streak-counter">
                  Streak: {calculateStreak(habit)}
                </div>
              </td>
              {weekDays.map((day, dayIndex) => (
                <td key={dayIndex} className={`${isToday(day) ? 'today-cell' : ''}`}>
                  <button
                    className={`checkmark-button ${habit.checkmarks[format(day, 'yyyy-MM-dd')] ? 'active' : ''}`}
                    onClick={() => onToggleCheckmark(habit.id, day)}
                    aria-label={`${habit.name} on ${format(day, 'PPPP')}: ${habit.checkmarks[format(day, 'yyyy-MM-dd')] ? 'completed' : 'not completed'}`}
                  >
                    {habit.checkmarks[format(day, 'yyyy-MM-dd')] ? '✓' : ''}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HabitGrid;