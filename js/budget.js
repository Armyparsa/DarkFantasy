// ===== BUDGET MODULE =====
let transaction = [];

function loadTransactions() {
  const stored = localStorage.getItem('dc_transactions');
  transaction = stored ? JSON.parse(stored) : [];
}

function saveTransactions() {
  localStorage.setItem('dc_transactions', JSON.stringify(transaction));
}

function addTransaction(title, amount, type, category, date) {
  transaction.push({ id: Date.now(), title, amount: parseFloat(amount), type, category: category || 'Other', date: date || new Date().toISOString().split('T')[0], createdAt: new Date().toISOString() });
  saveTransactions();
}

function deleteTransaction(id) {
  transaction = transaction.filter(x => x.id !== id);
  saveTransactions();
}

function getBalance() {
  return transaction.reduce((sum, t) => t.type === 'income' ? sum + t.amount : sum - t.amount, 0);
}

window.transaction = transaction;
window.loadTransactions = loadTransactions;
window.saveTransactions = saveTransactions;
window.addTransaction = addTransaction;
window.deleteTransaction = deleteTransaction;
window.getBalance = getBalance;
