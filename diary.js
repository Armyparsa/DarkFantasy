// ===== DIARY MODULE =====
let diaries = [];

function loadDiary() {
  const stored = localStorage.getItem('dc_diary');
  diaries = stored ? JSON.parse(stored) : [];
}

function saveDiary() {
  localStorage.setItem('dc_diary', JSON.stringify(diaries));
}

function addEntry(title, content, date) {
  diaries.push({ id: Date.now(), title, content, date: date || new Date().toISOString().split('T')[0], createdAt: new Date().toISOString() });
  saveDiary();
}

function deleteEntry(id) {
  diaries = diaries.filter(x => x.id !== id);
  saveDiary();
}

window.diaries = diaries;
window.loadDiary = loadDiary;
window.saveDiary = saveDiary;
window.addEntry = addEntry;
window.deleteEntry = deleteEntry;
