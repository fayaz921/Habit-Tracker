import { useState } from 'react';
import './AddHabitForm.css';

const AddHabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() !== '') {
      onAddHabit(habitName.trim());
      setHabitName('');
    }
  };

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a new habit (e.g., Read 30 min)"
        className="habit-input"
        aria-label="New habit name"
      />
      <button type="submit" className="add-button">
        Add Habit
      </button>
    </form>
  );
};

export default AddHabitForm;