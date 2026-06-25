// ===== HABITS MODULE =====
let habits = [];

function loadHabits() {
  const stored = localStorage.getItem('dc_habits');
  habits = stored ? JSON.parse(stored) : [];
}

function saveHabits() {
  localStorage.setItem('dc_habits', JSON.stringify(habits));
}

function addHabit(name, description) {
  habits.push({ id: Date.now(), name, description: description || '', history: [], createdAt: new Date().toISOString() });
  saveHabits();
}

function checkHabit(id) {
  const h = habits.find(x => x.id === id);
  if (h) {
    const today = new Date().toISOString().split('T')[0];
    if (!h.history.includes(today)) { h.history.push(today); saveHabits(); return true; }
  }
  return false;
}

function deleteHabit(id) {
  habits = habits.filter(x => x.id !== id);
  saveHabits();
}

window.habits = habits;
window.loadHabits = loadHabits;
window.saveHabits = saveHabits;
window.addHabit = addHabit;
window.checkHabit = checkHabit;
window.deleteHabit = deleteHabit;
