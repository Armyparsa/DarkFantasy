// ===== DEVELOPER MODULE =====
let projects = [];

function loadProjects() {
  const stored = localStorage.getItem('dc_projects');
  projects = stored ? JSON.parse(stored) : [];
}

function saveProjects() {
  localStorage.setItem('dc_projects', JSON.stringify(projects));
}

function addProjects(name, description, status) {
  projects.push({ id: Date.now(), name, description: description || '', status: status || 'active', tasks: [], createdAt: new Date().toISOString() });
  saveProjects();
}

function deleteProject(id) {
  projects = projects.filter(x => x.id !== id);
  saveProjects();
}

window.projects = projects;
window.loadProjects = loadProjects;
window.saveProjects = saveProjects;
window.addProjects = addProjects;
window.deleteProject = deleteProject;
