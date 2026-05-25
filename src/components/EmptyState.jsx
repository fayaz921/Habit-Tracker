import './EmptyState.css';

const EmptyState = ({ onAddHabit }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📋</div>
      <h2>No habits yet</h2>
      <p className="empty-state-description">
        Start by adding your first habit to track your progress.
      </p>
      <button className="primary-button" onClick={() => {
        // We'll use a prompt to get the habit name for simplicity in the empty state
        const habitName = prompt('Enter your first habit:');
        if (habitName !== null && habitName.trim() !== '') {
          onAddHabit(habitName.trim());
        }
      }}>
        Add First Habit
      </button>
    </div>
  );
};

export default EmptyState;