import { useState, useEffect } from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isToday, addWeeks, subWeeks } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import HabitGrid from './components/HabitGrid';
import WeekNavigator from './components/WeekNavigator';
import AddHabitForm from './components/AddHabitForm';
import EmptyState from './components/EmptyState';
import './styles/App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const saved = localStorage.getItem('currentWeekStart');
    return saved ? new Date(saved) : startOfWeek(new Date(), { weekStartsOn: 1 }); // Monday as start of week
  });

  // Load habits from localStorage on initial render
  useEffect(() => {
    const saved = localStorage.getItem('habits');
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Save current week start to localStorage
  useEffect(() => {
    localStorage.setItem('currentWeekStart', currentWeekStart.toISOString());
  }, [currentWeekStart]);

  const addHabit = (name) => {
    const newHabit = {
      id: uuidv4(),
      name,
      // We'll store checkmarks as an object with date strings as keys and boolean as value
      checkmarks: {}
    };
    setHabits([...habits, newHabit]);
  };

  const updateHabitName = (id, newName) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, name: newName } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const toggleCheckmark = (habitId, date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        return {
          ...habit,
          checkmarks: {
            ...habit.checkmarks,
            [dateString]: !habit.checkmarks[dateString]
          }
        };
      }
      return habit;
    }));
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart(subWeeks(currentWeekStart, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart(addWeeks(currentWeekStart, 1));
  };

  const goToCurrentWeek = () => {
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };

  const weekDays = eachDayOfInterval({
    start: currentWeekStart,
    end: endOfWeek(currentWeekStart, { weekStartsOn: 1 })
  });

  // Calculate streak for a habit (current consecutive days checked up to today)
  const calculateStreak = (habit) => {
    let streak = 0;
    const today = new Date();
    let checkDate = new Date(today);
    
    while (true) {
      const dateString = format(checkDate, 'yyyy-MM-dd');
      if (habit.checkmarks[dateString]) {
        streak++;
        // Move to yesterday
        checkDate = new Date(checkDate);
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Habit Tracker</h1>
        <WeekNavigator
          currentWeekStart={currentWeekStart}
          onPreviousWeek={goToPreviousWeek}
          onNextWeek={goToNextWeek}
          onCurrentWeek={goToCurrentWeek}
        />
      </header>
      <main>
        {habits.length === 0 ? (
          <EmptyState onAddHabit={addHabit} />
        ) : (
          <>
            <AddHabitForm onAddHabit={addHabit} />
            <HabitGrid
              habits={habits}
              weekDays={weekDays}
              onToggleCheckmark={toggleCheckmark}
              onUpdateHabitName={updateHabitName}
              onDeleteHabit={deleteHabit}
              calculateStreak={calculateStreak}
              currentWeekStart={currentWeekStart}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;